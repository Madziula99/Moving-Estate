import React, { Component } from "react";
import { useParams } from "react-router-dom";


class Property extends Component {
  render() {
    return <h2>{this.props.match.params.id}</h2>
  }
}  

export default Property;
