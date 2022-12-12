import React from "react";
import { withRouter } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class CreateFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  createFeature(feature, title) {
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;
    console.log("create", feature, title)
    fetch(`/api/properties/${propertyId}/features`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ icon: feature, title: title })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    return <FloorPlanForm propertyId={propertyId} handleSubmit={(feature, title) => this.createFeature(feature, title)} />
  }
}

export default withRouter(CreateFloorPlanForm);
