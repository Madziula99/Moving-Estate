import React from "react";
import { withRouter } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";
import BasePage from "./BasePage.jsx";

class CreateFloorPlanForm extends BasePage {
  state = {
    propertyId: this.props.match.params.id
  };

  createFloorPlan = (url, name) => this.createAction({
    url: `/api/properties/${this.state.propertyId}/floor_plans`,
    values: { url: url, name: name },
    redirect: `/properties/${this.state.propertyId}`
  })

  render() {
    const { propertyId } = this.state;

    return <FloorPlanForm propertyId={propertyId} handleSubmit={this.createFloorPlan} />
  }
}

export default withRouter(CreateFloorPlanForm);
