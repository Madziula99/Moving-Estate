import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { MenuButton } from "../../components/MenuButton/MenuButton.jsx";
import { Context } from "../../Context/Context.js";
import styles from "./Agent.module.css";

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

    if (this.context.isManager) return <div className={styles.agent_form_wrapper}>
      <MenuButton text="Edit agent" href={`/admin/agents/${agentId}/edit`} />
      <div className={styles.agent_form}>
        <img src={agentData.photo} alt="Agent" />
        <p>Name: {agentData.name}</p>
        <p>Email: {agentData.email}</p>
        <p>Location: {agentData.location}</p>
      </div>
    </div>

    return <Redirect to="/" />;
  }
}

Agent.contextType = Context;

export default withRouter(Agent);
