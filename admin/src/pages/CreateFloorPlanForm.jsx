import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class CreateFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id
  };

  createFloorPlan(image, name) {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/floor_plans`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: image, name: name })
    })
      .then(r => r.json())
      .catch(() => <Redirect to={`/properties/${propertyId}/floor_plans`} />);
  }

  render() {
    const { propertyId } = this.state;

    return <FloorPlanForm propertyId={propertyId} handleSubmit={(image, name) => this.createFloorPlan(image, name)} />
  }
}

export default withRouter(CreateFloorPlanForm);
