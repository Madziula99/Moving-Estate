import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { PropertyTable } from "../components/PropertyTable/PropertyTable.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { CreateProperty } from "./CreateProperty.jsx";

class Properties extends React.Component {
  state = {
    filteredProperties: [],
    agentName: "",
    isLoggedIn: false,
    isLoading: true,
  };

  async isLoggedIn() {
    return await fetch("/api/auth/current_user")
      .then(r => r.json())
      .then(({ user }) => user.emails[0].value)
      .catch(() => this.setState({ redirect: "/", isLoading: false }));
  }

  async getAgentsProperties() {
    this.setState({ isLoading: true });

    const email = await this.isLoggedIn();

    fetch(`/api/properties?email=${email}`)
      .then(r => r.json())
      .then(({ properties, agentName }) => {
        this.setState({
          filteredProperties: properties,
          agentName: agentName,
          isLoading: false,
          isLoggedIn: true
        })
      })
      .catch(() => this.setState({ redirect: "/", isLoading: false }));
    }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredProperties, isLoggedIn, isLoading, agentName, redirect } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    if (isLoggedIn) return <>
      <Switch>
        <Route path="/properties/new" component={CreateProperty}></Route>
      </Switch>
      <SignOut headerMessage={`${agentName}, welcome!`} />
      <PropertyTable adminProperties={filteredProperties} />
    </>
  }
}

export { Properties };
