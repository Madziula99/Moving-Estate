import React from "react";
import { MenuButton } from "../MenuButton/MenuButton.jsx";
import { EditAgentForm } from "../EditAgentForm/EditAgentForm.jsx";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  render() {
    const { id, photo, name, location, email } = this.props;

    return <>
      <MenuButton text="Edit agent" href={`/api/agents/${id}/edit`} />
      <div className={styles.agent_form}>
        <img src={photo} alt="Agent" />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
      </div>
      <EditAgentForm values={this.props} />
    </>
  }
}

export { Agent };
