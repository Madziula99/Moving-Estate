import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { PropertyTable } from "../components/PropertyTable/PropertyTable.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";

class Properties extends React.Component {
   constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);

    this.state = {
      filteredByAdminProperties: [],
      agentName: "",
      isLoggedIn: false,
      isLoading: true,
    }
  }

  async getAgentsProperties() {
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

    if (email) {
      await fetch("/api/properties?email=" + email)
        .then(r => r.json())
        .then(({ properties, agentName }) => {
          this.setState({
            filteredByAdminProperties: properties,
            agentName: agentName,
            isLoading: false,
            isLoggedIn: true
          })
        });
    }
  }

  async signOut() {
    await fetch("/api/auth/logout").then(() => {
      this.setState({ isLoggedIn: false });
    });
  }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredByAdminProperties, isLoggedIn, isLoading, agentName } = this.state;

    if (isLoading) return <Spinner />;

    if (isLoggedIn) return <>
      <SignOut agentName={agentName} signOut={() => this.signOut()} />
      <PropertyTable adminProperties={filteredByAdminProperties} />
    </>

    return <Redirect to="/" />
  }
}

export { Properties };
