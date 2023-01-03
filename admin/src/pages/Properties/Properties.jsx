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
    isLoading: true,
  };

  async getAgentsProperties() {
    const email = this.context.email;

    fetch(`/api/properties?email=${email}`)
      .then((r) => r.json())
      .then(({ properties }) => {
        this.setState({
          filteredProperties: properties,
          isLoading: false,
        });
      })
      .catch(() => this.setState({ redirect: "/", isLoading: false }));
  }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredProperties, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return (
      <>
        <Header>
          <SignOut headerMessage="Properties" />
        </Header>
        <PropertyTable adminProperties={filteredProperties} />

        <Switch>
          <Route path="/properties/new" component={CreateProperty}></Route>
        </Switch>
      </>
    );
  }
}

Properties.contextType = Context;

export { Properties };
