import React from "react";
import { Redirect } from "react-router-dom"
import { Spinner } from "../components/Spinner/Spinner.jsx";

class AdminsProperties extends React.Component {
  state = {
    isCookies: true,
  };


  /*componentDidMount() {
    const id = this.props.match.params.property_id;

    this.fetchProperty(id);
  }*/

  render() {
    const { isCookies } = this.state;

    return <section>
      {isCookies && <h2>Show list</h2>}
      {!isCookies && <Redirect to="/admin" />}
    </section>
  }
}

export {AdminsProperties};