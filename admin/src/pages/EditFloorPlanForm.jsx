import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class EditFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    image: this.props.image,
    name: this.props.name
  };

  updateFloorPlan(image, name) {
    console.log("update", image, name)
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;
    fetch(`/api/properties/${propertyId}/floor_plans/${icon}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title })
    }).then(r => {
      updateValues();
      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/features`} />;

    const { image, title } = this.props.location.aboutProps;

    return <FloorPlanForm propertyId={propertyId} icon={icon} title={title} handleSubmit={(icon, title) => this.updateFeature(icon, title)} />
  }
}

export default withRouter(EditFloorPlanForm);
