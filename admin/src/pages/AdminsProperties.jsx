import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AdminPropertyTable } from "../components/AdminPropertyTable/AdminPropertyTable.jsx";

const rows = [
  { picture: {
    avatar: "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png"
  },
    id: "A1", location: 'Snow', type: 'Jon', mode: "sale", price: 200, area: 150, bedrooms: 3, bathrooms: 0
  },
  { picture: {
    avatar: "https://preview.redd.it/s9edy9i5mbp41.jpg?auto=webp&s=232205a320f206393fbd55fe283564a6ccd95253"
  }, id: "B2", location: 'new', type: 'york', mode: "rent", price: 50,  area: 50, bedrooms:50, bathrooms:5},
  { picture: {
    avatar: ""
  }, id: "C3", location: 'minsk', type: 'old', mode: "clean", price: 1000,  area: 1000, bedrooms:1000, bathrooms:10},
];

class AdminsProperties extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      filteredByAdminProperties: rows,
      isCookies: true,
      isLoading: false,
    }
  }

  /*componentDidMount() {
    const id = this.props.match.params.property_id;

    this.fetchProperty(id);
  }*/

  render() {
    const { filteredByAdminProperties, isCookies, isLoading } = this.state;

    return <section>
      {isCookies && <AdminPropertyTable agentName = "Jon Lennon" agentEmail = "adam@example.com"
        adminProperties={filteredByAdminProperties}
      >
        {isLoading && <Spinner />}
      </AdminPropertyTable>}
      {!isCookies && <Redirect to="/admin" />}
    </section>
  }
}

export {AdminsProperties};