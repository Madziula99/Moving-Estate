import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FloorPlanForm } from "../components/FloorPlanForm/FloorPlanForm.jsx";

class EditFloorPlanForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    url: this.props.url,
    name: this.props.name
  };

  updateFloorPlan = (url, name) => {
    const { propertyId } = this.state;
    const { floorPlanId } = this.props.match.params;

    fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url: url, name: name })
    }).catch(() => <Redirect to={`/properties/${propertyId}`} />);
  }

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/floor_plans`} />;

    const { url, name } = this.props.location.aboutProps;

    return <FloorPlanForm propertyId={propertyId} url={url} name={name} handleSubmit={this.updateFloorPlan} />
  }
}

export default withRouter(EditFloorPlanForm);
