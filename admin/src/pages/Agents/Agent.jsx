import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { MenuButton } from "../../controls/MenuButton/MenuButton.jsx";
import { Context } from "../../Context/Context.js";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper.jsx";

class Agent extends React.Component {
  state = {
    agentData: {},
    agentId: this.props.match.params.id,
    isLoading: true,
    redirect: null
  };

  getAgent() {
    const { agentId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/agents/${agentId}`)
      .then(r => {
        if (r.status === 404) {
          throw new Error();
        } else {
          return r.json();
        }
      })
      .then(data => {
        this.setState({
          agentData: data.agent,
          isLoading: false
        })
      })
      .catch(() => this.setState({ redirect: "/agents", isLoading: false }));
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isLoading, agentData, agentId, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    if (this.context.isManager) return <PageWrapper>
        <MenuButton text="Edit agent" href={`/admin/agents/${agentId}/edit`} />
        <div>
          <img src={agentData.photo} alt="Agent" />
          <p>Name: {agentData.name}</p>
          <p>Email: {agentData.email}</p>
          <p>Location: {agentData.location}</p>
        </div>
    </PageWrapper>

    return <Redirect to="/" />;
  }
}

Agent.contextType = Context;

export default withRouter(Agent);
