import React from "react";
import { Redirect } from "react-router-dom";
import { AgentForm } from "../components/AgentForm/AgentForm.jsx";

class CreateAgent extends React.Component {
  state = {
    isSubmitted: false,
    isCancelled: false
  };

  async createAgent(values) {
    await fetch("/api/agents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r => r.json());
  }

  render() {
    const { isSubmitted, isCancelled } = this.state;

    if (isSubmitted || isCancelled) return <Redirect to="/agents" />

    return <AgentForm
      values={{ name: "", email: "", location: "", photo: "" }}
      handleSubmit={() => this.setState({ isSubmitted: true })}
      handleCancel={() => this.setState({ isCancelled: true })}
      handleCreateOrUpdate={newValues => this.createAgent(newValues)}
    />
  }
}

export { CreateAgent };
