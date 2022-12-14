import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class EditFeatureForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    features: [],
    icon: this.props.icon,
    title: this.props.title,
    redirect: null,
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
      .then(() => this.setState({ isLoading: false }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  async getFeatures() {
    this.setState({ isLoading: true })
    const { propertyId } = this.state;
    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => this.setState({ features: data.features, isLoading: false }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {
    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/features`} />;

    const { propertyId, features, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />

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
