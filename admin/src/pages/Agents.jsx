import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AgentsTable } from "../components/AgentsTable/AgentsTable.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";

const managerEmail = "jsmastery2022@gmail.com";

class Agents extends React.Component {
  state = {
    agents: [],
    isLoggedIn: false,
    isLoading: true,
  };

  async getAgents() {
    this.setState({ isLoading: true });

    const email = await fetch("/api/auth/current_user")
      .then(r => {
        if (r.status === 401) {
          this.setState({ isLoading: false });
          return null;
        } else {
          return r.json().then(({ user }) => user.emails[0].value);
        }
      })

    if (email === managerEmail) {
        this.setState({
            //agents: agents,
            isLoading: false,
            isLoggedIn: true
          })
    //   await fetch("/api/agents")
    //     .then(r => r.json())
    //     .then(({ agents }) => {
    //       this.setState({
    //         agents: agents,
    //         isLoading: false,
    //         isLoggedIn: true
    //       })
    //     });
    }
  }

  componentDidMount() {
    this.getAgents();
  }

  render() {
    const { agents, isLoggedIn, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (isLoggedIn) return <>
      <SignOut headerMessage={"Manager Panel"} />
      <AgentsTable agents={agents} /> 
    </>

    return <Redirect to="/" />
  }
}

export { Agents };
