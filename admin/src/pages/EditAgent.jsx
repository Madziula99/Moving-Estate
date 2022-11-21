import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import AgentForm from "../components/AgentForm/AgentForm.jsx";

class EditAgent extends React.Component {
  state = {
    isSubmitted: false
  };

  render() {
    const { isSubmitted } = this.state;
    const agentId = this.props.match.params.id;

    if (isSubmitted) return <Redirect to={`/agents/${agentId}`} />

    return <AgentForm mode="edit" onSubmitted={() => this.setState({ isSubmitted: true })} />
  }
}

export default withRouter(EditAgent);
