import React from "react";
import { withRouter } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import EditAgent from "./EditAgent.jsx";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  state = {
    agentData: {},
    isLoading: true,
    isEditing: false
  };

  async getAgent() {
    const agentId = this.props.match.params.id;

    this.setState({ isLoading: true });

    await fetch(`/api/agents/${agentId}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          agentData: data.agent,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isLoading, agentData, isEditing } = this.state;
    const agentId = this.props.match.params.id;

    if (isLoading) return <Spinner />;

    if (isEditing) return <EditAgent />

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
