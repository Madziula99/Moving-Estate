import React from "react";
import { Redirect } from "react-router-dom";
import AgentForm from "../components/AgentForm/AgentForm.jsx";

class CreateAgent extends React.Component {
  state = {
    isSubmitted: false
  };

  render() {
    const { isSubmitted } = this.state;

    if (isSubmitted) return <Redirect to="/agents" />

    return <AgentForm onSubmitted={() => this.setState({ isSubmitted: true })} />
  }
}

export { CreateAgent };
