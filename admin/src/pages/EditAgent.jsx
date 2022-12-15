import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AgentForm } from "../components/AgentForm/AgentForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class EditAgent extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    agentId: this.props.match.params.id,
    agentData: {},
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

  async getAgent() {
    const { agentId } = this.state;

    await fetch(`/api/agents/${agentId}`).then(r => {
      if (r.status === 404) {
        throw new Error();
      } else {
        return r.json().then(data => {
          this.setState({
            agentData: data.agent,
          })
        });
      }
    }).catch(() => this.setState({ redirect: "/agents" }));
  }

  async updateAgent(values) {
    const { agentId } = this.state;

    this.setState({ isSubmitting: true });

    await fetch(`/api/agents/${agentId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r => {
      this.returnToAgentPage();

      return r.json();
    });
  }

  returnToAgentPage() {
    const { agentId } = this.state;

    this.setState({ redirect: `/agents/${agentId}` });
  }

  componentDidMount() {
    this.isManager();
    this.getAgent();
  }

  render() {
    const { redirect, agentData, isSubmitting, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    if (agentData.name) {
      return <AgentForm
        values={agentData}
        handleSubmit={newValues => this.updateAgent(newValues)}
        handleCancel={() => this.returnToAgentPage()}
        state={isSubmitting ? "submitting" : "ready"}
      />
    }
  }
}

export default withRouter(EditAgent);