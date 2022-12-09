import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import CreateFeatureForm from "./CreateFeatureForm.jsx";
import EditFeatureForm from "./EditFeatureForm.jsx";
import FeaturesItem from "../components/FeaturesItem/FeaturesItem.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";

class Features extends React.Component {
  render() {
    console.log("props", this.props)
    const { features, updateValues } = this.props;
    const propertyId = this.props.match.params.id;

    return <>
      {features.map(feature => <FeaturesItem feature={feature} key={feature.name} updateValues={updateValues} />)}
      <NavLinkWrapper propertyId={propertyId} type="features" text="Add Feature" updateValues={updateValues} />

      <Switch>
        <Route exact path="/properties/:id/features/new" component={CreateFeatureForm}></Route>
        <Route path="/properties/:propertyId/features/:icon/edit" component={EditFeatureForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Features);
