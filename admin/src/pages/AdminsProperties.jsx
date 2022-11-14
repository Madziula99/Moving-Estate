import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AdminPropertyTable } from "../components/AdminPropertyTable/AdminPropertyTable.jsx";

class AdminsProperties extends React.Component {
   constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);

    this.state = {
      filteredByAdminProperties: [],
      agentName: "",
      hasCookie: document.cookie.length > 0 || false,
      isLoading: false,
    }
  }

  async getAgentsProperties() {
    this.setState({ isLoading: true });

    await fetch("/api/properties")
      .then(r => r.json())
      .then(({ properties, agentName })  => {
        this.setState({
          filteredByAdminProperties: properties,
          agentName: agentName,
          isLoading: false
        })
      });
  }

  async signOut() {
    await fetch("/api/auth/logout").then(() => {
      document.cookie = "user_email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      this.setState({ hasCookie: false });
    });
  }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredByAdminProperties, hasCookie, isLoading, agentName } = this.state;

    if (isLoading) return <Spinner />;

    if (hasCookie) {
      return <AdminPropertyTable
        agentName={agentName}
        adminProperties={filteredByAdminProperties}
        signOut={() => this.signOut()}
      />
    }

    return <Redirect to="/" />
  }
}

export { AdminsProperties };
