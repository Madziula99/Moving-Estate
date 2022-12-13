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
    const { propertyId } = this.state;
    const { floorPlanId } = this.props.match.params;

    fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: image, name: name })
    })
      .then(r => r.json())
      .catch(() => <Redirect to={`/properties/${propertyId}`} />);
  }

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/floor_plans`} />;

    const { image, name } = this.props.location.aboutProps;

    return <FloorPlanForm propertyId={propertyId} image={image} name={name} handleSubmit={(image, name) => this.updateFloorPlan(image, name)} />
  }
}

export default withRouter(EditFloorPlanForm);
