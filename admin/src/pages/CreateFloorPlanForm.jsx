import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class CreateFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id
  };

  createFloorPlan = (url, name) => {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/floor_plans`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: url, name: name })
    }).catch(() => <Redirect to={`/properties/${propertyId}`} />);
  }

  render() {
    const { propertyId } = this.state;

    return <FloorPlanForm propertyId={propertyId} handleSubmit={this.createFloorPlan} />
  }
}

export default withRouter(CreateFloorPlanForm);
