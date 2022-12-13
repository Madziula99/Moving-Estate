import React from "react";
import { withRouter } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class CreateFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id
  };

  createFloorPlan(image, name) {
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;

    fetch(`/api/properties/${propertyId}/floor_plans`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: image, name: name })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    return <FloorPlanForm propertyId={propertyId} mode="create" handleSubmit={(image, name) => this.createFloorPlan(image, name)} />
  }
}

export default withRouter(CreateFloorPlanForm);
