import React from "react";
import { Redirect } from "react-router-dom";
import { AgentForm } from "../components/AgentForm/AgentForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class CreateAgent extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
  };

  isManager() {
    this.setState({
      isLoading: true
    });

    fetch("/api/auth/manager")
      .then(res => res.json())
      .then(body => {
        if (body.manager) this.setState({ isLoading: false });
        else this.setState({ isLoading: false, redirect: "/" });
      })
      .catch(() => this.setState({ isLoading: false, redirect: "/" }));
  }

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

  componentDidMount() {
    this.isManager();
  }

  render() {
    const { redirect, isSubmitting, isLoading } = this.state;

    if (isLoading) return <Spinner />;

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
