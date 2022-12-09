import React from "react";
import { withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";

class CreateFeatureForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  createFeature(featureLink) {
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;

    fetch(`/api/properties/${propertyId}/features`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: featureLink })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    return <FeatureForm propertyId={propertyId} link="" handleSubmit={link => this.createFeature(link)} />
  }
}

export default withRouter(CreateFeatureForm);
