import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import CreateFeatureForm from "./CreateFeatureForm.jsx";
import EditFeatureForm from "./EditFeatureForm.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { FeaturesList } from "../components/FeaturesList/FeaturesList.jsx";

class Features extends React.Component {
  constructor(props) {
    super(props);

    this.deleteFeature = this.deleteFeature.bind(this);
    this.updateValues = this.updateValues.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      isLoading: true,
      redirect: null,
      features: []
    };
  }

  getFeatures() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}`)
      .then(res => {
        if (res.status === 404) throw new Error();
        return res.json();
      })
      .then(data => {
        this.setState({
          features: data.features,
          isLoading: false,
        })
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async deleteFeature(featureId) {
    if (window.confirm("Are you sure you want to delete this feature?")) {
      const { propertyId } = this.state;

      await fetch(`/api/properties/${propertyId}/features/${featureId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => {
        this.updateValues();

        return r.json();
      });
    }
  }

  componentDidMount() {
    this.getFeatures();
  }

  updateValues() {
    this.getFeatures();
  }

  render() {
    const { propertyId, features, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <FeaturesList features={features} deleteFeature={this.deleteFeature} updateValues={this.updateValues} />
      <NavLinkWrapper propertyId={propertyId} type="features" text="Add Feature" updateValues={this.updateValues} />

      <Switch>
        <Route exact path="/properties/:id/features/new" component={CreateFeatureForm}></Route>
        <Route path="/properties/:propertyId/features/:icon/edit" component={EditFeatureForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Features);
