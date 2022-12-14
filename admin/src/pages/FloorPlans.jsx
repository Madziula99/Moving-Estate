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
      this.setState({isLoading: true})
      fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then(r => {
          this.setState({isLoading: false})
          return r.json()
        })
        .catch(() => this.setState({ redirect: `/properties/${propertyId}/floor_plans`, isLoading: false }));
    }
  }

  componentDidMount() {
    this.getFloorPlans();
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
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async componentDidUpdate() {
    const { floorPlans } = this.state;
    const updated = await this.fetchFloorPlans();

    if (JSON.stringify(floorPlans) === JSON.stringify(updated)) return;

    this.setState({ floorPlans: updated });
  }

  render() {
    const { propertyId, floorPlans, isLoading, redirect } = this.state;
    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <FloorPlansList floorPlans={floorPlans} deleteFloorPlan={this.deleteFloorPlan} />
      <NavLinkWrapper propertyId={propertyId} type="floor_plans" text="Add Floor plan" />

      <Switch>
        <Route exact path="/properties/:id/floor_plans/new" component={CreateFloorPlanForm}></Route>
        <Route path="/properties/:propertyId/floor_plans/:floorPlanId/edit" component={EditFloorPlanForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(FloorPlans);
