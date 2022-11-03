import React from "react";
import { AdminPropertyCard } from "../AdminPropertyCard/AdminPropertyCard.jsx";

class AdminPropertiesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMode: this.props.defaultView
    };
  }

  render() {
     return <AdminPropertyCard />
  }
}

export { AdminPropertiesList };