import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AdminPropertyTable } from "../components/AdminPropertyTable/AdminPropertyTable.jsx";

class AdminsProperties extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      filteredByAdminProperties: [],
      agentEmail: "john@example.com",
      agentName: "",
      isCookies: true,//TODO: delete if it not need after
      isLoading: false,
    }
  }

  //TODO: have to filter all on server site and delete data.json there
  async getAgentsProperties() {
    this.setState({ isLoading: true });

    const urlQueryParams = new URLSearchParams({ email: this.state.agentEmail }).toString().replace(".", "%2E");

    await fetch("/api/properties?" + urlQueryParams)
      .then(r => r.json())
      .then(({ properties, agentName })  => {
        this.setState({
          filteredByAdminProperties: properties,
          agentName: agentName,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    this.getAgentsProperties();
  }

  render() {
    const { filteredByAdminProperties, isCookies, isLoading, agentName } = this.state;

    return <section>
      {isCookies && <AdminPropertyTable agentName = { agentName }
        adminProperties={filteredByAdminProperties}>
        {isLoading && <Spinner />}
      </AdminPropertyTable>}
      {!isCookies && <Redirect to="/admin" />}
    </section>
  }
}

export {AdminsProperties};