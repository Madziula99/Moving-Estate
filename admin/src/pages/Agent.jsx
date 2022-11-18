import React from "react";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Form } from "../components/Form/Form.jsx";
import styles from "./Agent.module.css";

class Agent extends React.Component {
  state = {
    isEditing: false
  };

  enableEditMode() {
    this.setState({ isEditing: true });
  }

  disableEditMode() {
    this.setState({ isEditing: false });
  }

  render() {
    const { id, photo, name, location, email } = this.props;
    const { isEditing } = this.state;

    if (isEditing) return <Form mode="edit" values={this.props} disableEditMode={() => this.disableEditMode()} />

    return <div className={styles.agent_form_wrapper}>
      <MenuButton text="Edit agent" enableMode={() => this.enableEditMode()} /* href={`/api/agents/${id}/edit`} */ />
      <div className={styles.agent_form}>
        <img src={photo} alt="Agent" />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  }
}

export { Agent };
