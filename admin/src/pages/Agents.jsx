import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AgentsTable } from "../components/AgentsTable/AgentsTable.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";

class Agents extends React.Component {
  state = {
    agents: [],
    isLoading: true,
    redirect: null
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
    this.isManager();
    this.getAgents();
  }

  render() {
    const { agents, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <SignOut headerMessage={"Manager Panel"} />
      <AgentsTable agents={agents} />
    </>
  }
}

export { Agents };
