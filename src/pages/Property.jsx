import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Property extends Component {  
  render() {       
    return <h2>There is {this.props.match.params.property_id}</h2>    
  }
}  

export default withRouter(Property);
