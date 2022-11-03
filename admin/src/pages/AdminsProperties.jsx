import React from "react";
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

    if (isCookies) return <div>AdminsProperties</div>

    return <h2><Spinner /></h2>
  }
}

export {AdminsProperties};