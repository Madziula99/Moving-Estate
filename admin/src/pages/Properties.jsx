import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { PropertyTable } from "../components/PropertyTable/PropertyTable.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { CreateProperty } from "./CreateProperty.jsx";
import Context from "../Context/Context.js";

class Properties extends React.Component {
  state = {
    filteredProperties: [],
    agentName: "",
    isLoggedIn: false,
    isLoading: true,
  };

  async isLoggedIn() {
    console.log("Properties")
    this.setState({ isLoading: true });

    const email = await Context.isLoggedIn();

    if (email === undefined) return this.setState({ isLoading: false, redirect: "/" });

    return email;
  }

  async getAgentsProperties() {
    const email = await this.isLoggedIn();

    fetch(`/api/properties?email=${email}`)
      .then(r => r.json())
      .then(({ properties, agentName }) => {
        this.setState({
          filteredProperties: properties,
          agentName: agentName,
          isLoading: false,
          isLoggedIn: true
        });
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
