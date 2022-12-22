import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";
import BasePage from "./BasePage.jsx";

class CreateFeatureForm extends BasePage {
  state = {
    features: [],
    propertyId: this.props.match.params.id,
    redirect: null,
  };

  createFeature = (feature, title) => this.createAction({
    url: `/api/properties/${this.state.propertyId}/features`,
    values: { icon: feature, title: title },
    failureRedirect: `/properties/${this.state.propertyId}`
  })

  async getFeatures() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}` }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {
    const { propertyId, features, redirect } = this.state;

    if (redirect) return <Redirect to={redirect} />

    return <FeatureForm
      features={features}
      propertyId={propertyId}
      icon=""
      title=""
      handleSubmit={this.createFeature}
    />
  }
}

export default withRouter(CreateFeatureForm);
