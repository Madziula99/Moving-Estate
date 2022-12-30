import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { MenuButton } from "../../controls/MenuButton/MenuButton.jsx";
import { Context } from "../../Context/Context.js";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper.jsx";
import DeleteAgent from "./DeleteAgent.jsx";

class Agent extends React.Component {
  state = {
    agentData: {},
    agentId: this.props.match.params.id,
    isLoading: true,
    redirect: null,
  };

  getAgent() {
    const { agentId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/agents/${agentId}`)
      .then((r) => r.json())
      .then((data) => {
        this.setState({
          agentData: data.agent,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ redirect: "/agents", isLoading: false }));
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isLoading, agentData, agentId, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    if (this.context.isManager)
      return (
        <PageWrapper>
          <MenuButton
            text="Edit agent"
            href={`/admin/agents/${agentId}/edit`}
          />
          <MenuButton
            text="Delete agent"
            href={`/admin/agents/${agentId}/delete`}
          />
          <MenuButton text="To agents" href="/admin/agents" />
          <div>
            <img src={agentData.photo} alt="Agent" />
            <p>Name: {agentData.name}</p>
            <p>Email: {agentData.email}</p>
            <p>Location: {agentData.location}</p>
          </div>

          <Switch>
            <Route path="/agents/:id/delete" component={DeleteAgent}></Route>
          </Switch>
        </PageWrapper>
      );

    return <Redirect to="/" />;
  }
}

Agent.contextType = Context;

export default withRouter(Agent);
