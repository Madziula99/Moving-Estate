import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import AgentForm from "../components/AgentForm/AgentForm.jsx";

class EditAgent extends React.Component {
  state = {
    isSubmitted: false,
    isCancelled: false,
    agentData: {}
  };

  async getAgent() {
    const agentId = this.props.match.params.id;

    await fetch(`/api/agents/${agentId}`).then(r => r.json()).then(data => {
      this.setState({
        agentData: data.agent,
      })
    });
  }

  async updateAgent(values) {
    const agentId = this.props.match.params.id;

    await fetch(`/api/agents/${agentId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r => r.json());
  }

  componentDidMount() {
    this.getAgent();
  }

  render() {
    const { isSubmitted, isCancelled, agentData } = this.state;
    const agentId = this.props.match.params.id;

    if (isSubmitted || isCancelled) return <Redirect to={`/agents/${agentId}`} />

    if (agentData.name) {
      return <AgentForm
        values={agentData}
        handleSubmit={() => this.setState({ isSubmitted: true })}
        handleCancel={() => this.setState({ isCancelled: true })}
        handleCreateOrUpdate={newValues => this.updateAgent(newValues)}
      />
    }
  }
}

export default withRouter(EditAgent);
