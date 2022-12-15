import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";

class EditFeatureForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    features: [],
    icon: this.props.icon,
    title: this.props.title,
    redirect: null,
  };

  updateFeature = (icon, title) => {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/features/${icon}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title })
    }).catch(() => this.setState({ redirect: `/properties/${propertyId}` }));
  }

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

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/features`} />

    if (redirect) return <Redirect to={redirect} />

    const { feature, title } = this.props.location.aboutProps.feature;

    return <FeatureForm
      editMode
      features={features}
      propertyId={propertyId}
      icon={feature}
      title={title}
      handleSubmit={this.updateFeature}
    />
  }
}

export default withRouter(EditFeatureForm);
