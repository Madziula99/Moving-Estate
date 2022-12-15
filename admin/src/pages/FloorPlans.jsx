import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import CreateFloorPlanForm from "./CreateFloorPlanForm.jsx";
import EditFloorPlanForm from "./EditFloorPlanForm.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { FloorPlansList } from "../components/FloorPlansList/FloorPlansList.jsx";

class FloorPlans extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
    isLoading: true,
    redirect: null,
    floorPlans: []
  };

  deleteFloorPlan = floorPlanId => {
    if (window.confirm("Are you sure you want to delete this floor plan?")) {
      const { propertyId } = this.state;

      fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(() => this.setState({ isLoading: false }))
        .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
    }
  }

  async getFloorPlans() {
    this.setState({ isLoading: true });

    const floorPlans = await this.fetchFloorPlans();

    this.setState({
      floorPlans: floorPlans,
      isLoading: false,
    })
  }

  async fetchFloorPlans() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => data.floor_plans)
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  async componentDidUpdate() {
    const { floorPlans, isLoading } = this.state;

    if (isLoading) return;

    const updated = await this.fetchFloorPlans();

    if (JSON.stringify(floorPlans) === JSON.stringify(updated)) return;

    this.getFloorPlans();
  }

  componentDidMount() {
    this.getFloorPlans();
  }

  render() {
    const { propertyId, floorPlans, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    return <>
      <FloorPlansList floorPlans={floorPlans} deleteFloorPlan={this.deleteFloorPlan} />
      <NavLinkWrapper propertyId={propertyId} type="floor_plans" text="Add floor plan" />

      <Switch>
        <Route exact path="/properties/:id/floor_plans/new" component={CreateFloorPlanForm}></Route>
        <Route path="/properties/:propertyId/floor_plans/:floorPlanId/edit" component={EditFloorPlanForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(FloorPlans);
