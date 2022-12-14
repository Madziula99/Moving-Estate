import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class CreateFeatureForm extends React.Component {
  state = {
    features: [],
    propertyId: this.props.match.params.id,
    redirect: null,
  };

  createFeature = (feature, title) => {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/features`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ icon: feature, title: title })
    }).catch(() => this.setState({ redirect: `/properties/${propertyId}` }));
  }

  async getFeatures() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features }))
      .catch(() => this.setState({ redirect: "/properties" }));
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
