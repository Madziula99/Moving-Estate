import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";

class EditFeatureForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    features: [],
    icon: this.props.icon,
    title: this.props.title,
    isLoading: true
  };

  updateFeature = (icon, title) => {
    this.setState({ isLoading: true })
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/features/${icon}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title })
    })
      .then(r => r.json())
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  async getFeatures() {
    const { propertyId } = this.state;
    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {
    const { propertyId, features } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/features`} />;

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
