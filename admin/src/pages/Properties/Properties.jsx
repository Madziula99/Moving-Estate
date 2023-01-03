import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { PropertyTable } from "../../components/PropertyTable/PropertyTable.jsx";
import { SignOut } from "../../components/SignOut/SignOut.jsx";
import { CreateProperty } from "./CreateProperty.jsx";
import { Context } from "../../Context/Context.js";
import { Header } from "../../components/Header/Header.jsx";

class Properties extends React.Component {
  state = {
    filteredProperties: [],
    agentName: "",
    isLoading: true,
  };

  async getAgentsProperties() {
    const email = this.context.email;

    fetch(`/api/properties?email=${email}`)
      .then((r) => r.json())
      .then(({ properties, agentName }) => {
        this.setState({
          filteredProperties: properties,
          agentName: agentName,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ redirect: "/", isLoading: false }));
  }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredProperties, isLoading, agentName, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return (
      <>
        <Header></Header>
        <Switch>
          <Route path="/properties/new" component={CreateProperty}></Route>
        </Switch>

        <SignOut headerMessage={`${agentName}, welcome!`} />

        <PropertyTable adminProperties={filteredProperties} />
      </>
    );
  }
}

Properties.contextType = Context;

export { Properties };
