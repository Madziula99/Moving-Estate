import React from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  render() {
    const { id, photo, name, location, email } = this.props;

    return <>
      <MenuButton text="Edit agent" href={`/api/agents/${id}/edit`} />
      <div className={styles.agent_form}>
        <img src={photo} />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Email: {email}</p>
      </div>
    </>
  }
}

export { Agent };
