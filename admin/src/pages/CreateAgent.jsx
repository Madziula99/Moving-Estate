import React from "react";
import { Redirect } from "react-router-dom";
import { AgentForm } from "../components/AgentForm/AgentForm.jsx";

class CreateAgent extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false
  };

  async createAgent(values) {
    this.setState({ isSubmitting: true });

    await fetch("/api/agents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r =>  r.json()).then(({ agent }) => {
      this.setState({
        redirect: `/agents/${agent.id}`
      });
    });
  }

  returnToAgents() {
    this.setState({ redirect: "/agents" });
  }

  render() {
    const { redirect, isSubmitting } = this.state;

    if (redirect) return <Redirect to={redirect} />

    return <AgentForm
      values={{ name: "", email: "", location: "", photo: "" }}
      handleSubmit={newValues => this.createAgent(newValues)}
      handleCancel={() => this.returnToAgents()}
      state={isSubmitting ? "submitting" : "ready"}
    />
  }
}

export { CreateAgent };
