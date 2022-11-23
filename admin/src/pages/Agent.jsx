import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import EditAgent from "./EditAgent.jsx";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  state = {
    agentData: {},
    agentId: this.props.match.params.id,
    isLoading: true,
    isEditing: false,
    redirect: null
  };

  async getAgent() {
    const { agentId } = this.state;

    this.setState({ isLoading: true });

    await fetch(`/api/agents/${agentId}`)
      .then(r => {
        if (r.status === 404) {
          throw new Error();
        } else {
          r.json().then(data => {
            this.setState({
              agentData: data.agent,
              isLoading: false
            })
          });
        }
      })
      .catch(() => this.setState({ redirect: "/agents", isLoading: false }));
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isLoading, agentData, agentId, isEditing, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (isEditing) return <EditAgent />

    if (redirect) return <Redirect to={redirect} />

    return <div className={styles.agent_form_wrapper}>
      <MenuButton text="Edit agent" handleClick={() => this.setState({ isEditing: true })} href={`/admin/agents/${agentId}/edit`} />
      <div className={styles.agent_form}>
        <img src={agentData.photo} alt="Agent" />
        <p>Name: {agentData.name}</p>
        <p>Email: {agentData.email}</p>
        <p>Location: {agentData.location}</p>
      </div>
    </div>
  }
}

export default withRouter(Agent);
