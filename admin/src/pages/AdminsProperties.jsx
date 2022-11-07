import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AdminPropertyTable } from "../components/AdminPropertyTable/AdminPropertyTable.jsx";
//import Data from "../data.json"

const emailToFilter = "adam@example.com"
/*const filterByEmailRows = Data.filter(e => e.agent.email === emailToFilter)
const filteredProperties =filterByEmailRows.map(property => {
  return {
      picture: { avatar: property.images[0] },
      id: property.id,
      location: property.location,
      type: property.type,
      mode: property.mode,
      price: property.price,
      area: property.area,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms
    }
  });*/

class AdminsProperties extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      filteredByAdminProperties: [],
      agentEmail: emailToFilter,
      agentName: "filterByEmailRows[0].agent.name",
      isCookies: true,//TODO: delete if it not need after
      isLoading: false,
    }
  }

  //TODO: have to filter all on server site and delete data.json there
  async getAgentsProperties() {
    this.setState({ isLoading: true });

    const urlQueryParams = new URLSearchParams({ email: this.state.agentEmail }).toString().replace(".", "%2E");
    console.log("/api/properties?" + urlQueryParams, "urlQueryParams")

    //await fetch("/api/properties?" + urlQueryParams)
      await fetch("/api/properties?email=adam%40example%2Ecom")
        .then(r => {
          console.log(JSON.stringify(r));
          r.json()
        })
      .then(properties  => {
        this.setState({
          filteredByAdminProperties: properties,
          isLoading: false
        })
        console.log(properties, "properties");
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