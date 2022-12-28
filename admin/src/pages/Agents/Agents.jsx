import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { AgentsTable } from "../../components/AgentsTable/AgentsTable.jsx";
import { SignOut } from "../../components/SignOut/SignOut.jsx";
import { Context } from "../../Context/Context.js";

class Agents extends React.Component {
  state = {
    agents: [],
    isLoading: true,
  };

  getAgents() {
    this.setState({ isLoading: true });

    fetch("/api/agents")
      .then(r => r.json())
      .then(data => {
        this.setState({
          agents: data.agents,
          isLoading: false,
        })
      });
  }

  componentDidMount() {
    this.getAgents();
  }

  render() {
    const { agents, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (this.context.isManager) return <>
      <SignOut headerMessage={"Manager Panel"} />
      <AgentsTable agents={agents} />
    </>

    return <Redirect to="/" />;
  }
}

Agents.contextType = Context;

export { Agents };
