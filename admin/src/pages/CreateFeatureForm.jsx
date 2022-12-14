import React from "react";
import { withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";

class CreateFeatureForm extends React.Component {
  state = {
    features: [],
    propertyId: this.props.match.params.id,
  };

  createFeature(feature, title) {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/features`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ icon: feature, title: title })
    })
      .then(r => r.json())
      .catch(() => this.setState({ redirect: `/properties/${propertyId}/features`, isLoading: false }));
  }

  async getFeatures() {
    const { propertyId } = this.state;
    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features }))
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {
    const { propertyId, features } = this.state;

    return <FeatureForm
      features={features}
      propertyId={propertyId}
      icon=""
      title=""
      handleSubmit={(feature, title) => this.createFeature(feature, title)}
    />
  }
}

export default withRouter(CreateFeatureForm);
