import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class CreateFeatureForm extends React.Component {
  state = {
    features: [],
    propertyId: this.props.match.params.id,
    redirect: null,
    isLoading: true
  };

  createFeature(feature, title) {
    this.setState({ isLoading: true})
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/features`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ icon: feature, title: title })
    })
      .then(() => this.setState({ isLoading: false }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}/features`, isLoading: false }));
  }

  async getFeatures() {
    const { propertyId } = this.state;
    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features, isLoading: false }))
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {
    const { propertyId, features, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

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
