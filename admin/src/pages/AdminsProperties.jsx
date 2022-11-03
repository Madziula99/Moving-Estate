import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AdminPropertiesList } from "../components/AdminPropertiesList/AdminPropertiesList.jsx"

class AdminsProperties extends React.Component {
  state = {
    isCookies: true,
    isLoading: false,
  };

  /*componentDidMount() {
    const id = this.props.match.params.property_id;

    this.fetchProperty(id);
  }*/

  render() {
    const { isCookies, isLoading } = this.state;

    return <section>
      {isCookies && <AdminPropertiesList
        defaultView="grid"
        //properties={filteredByAdminProperties}
      >
        {isLoading && <Spinner />}
      </AdminPropertiesList>}
      {!isCookies && <Redirect to="/admin" />}
    </section>
  }
}

export {AdminsProperties};