import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import CreateFeatureForm from "./CreateFeatureForm.jsx";
import EditFeatureForm from "./EditFeatureForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { FeaturesList } from "../components/FeaturesList/FeaturesList.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";

class Features extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
    isLoading: true,
    redirect: null,
    features: [],
    disableAdd: false
  };

  async getFeatures() {
    this.setState({ isLoading: true });

    const features = await this.fetchFeatures();

    this.setState({
      features: features,
      isLoading: false,
      disableAdd: features.length === 3 ? true : false
    })
  }

  deleteFeature = (feature) => {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      this.setState({ isLoading: true });
      const { propertyId } = this.state;

      fetch(`/api/properties/${propertyId}/features/${feature}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(() => this.setState({ isLoading: false }))
        .catch(() => this.setState({ redirect: "/properties", isLoading: false }));;
    }
  }

  async fetchFeatures() {
    const { propertyId } = this.state;
    return await fetch(`/api/properties/${propertyId}`)
    .then(res => res.json())
    .then(data => data.features)
    .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  componentDidMount() {
    this.getFeatures();
  }

  async componentDidUpdate() {
    const { features } = this.state;
    const newFeatures = await this.fetchFeatures();

    if (JSON.stringify(features) === JSON.stringify(newFeatures)) return;
    console.log("Get values again", newFeatures, newFeatures.length === 3);
    this.setState({
      features: newFeatures,
      disableAdd: newFeatures.length === 3
    });
  }

  render() {
    const { propertyId, features, isLoading, redirect, disableAdd } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <FeaturesList features={features} deleteFeature={this.deleteFeature}/>
      <NavLinkWrapper propertyId={propertyId} disabled={disableAdd} type="features" text="Add Feature" />

      <Switch>
        <Route exact path="/properties/:id/features/new" component={CreateFeatureForm}></Route>
        <Route path="/properties/:propertyId/features/:icon/edit" component={EditFeatureForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Features);
