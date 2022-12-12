import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import CreateFloorPlanForm from "./CreateFloorPlanForm.jsx";
import EditFloorPlanForm from "./EditFloorPlanForm.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { FloorPlansList } from "../components/FloorPlansList/FloorPlansList.jsx";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.deleteFloorPlan = this.deleteFloorPlan.bind(this);
    this.updateValues = this.updateValues.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      isLoading: true,
      redirect: null,
      floorPlans: []
    };
  }

  getFloorPlans() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}`)
      .then(res => {
        if (res.status === 404) throw new Error();
        return res.json();
      })
      .then(data => {

        this.setState({
          floorPlans: data.floor_plans,
          isLoading: false,
        })
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async deleteFloorPlan(floorPlanId) {
    if (window.confirm("Are you sure you want to delete this floor plan?")) {
      const { propertyId } = this.state;

      await fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => {
        this.updateValues();

        return r.json();
      });
    }
  }

  componentDidMount() {
    this.getFloorPlans();
  }

  updateValues() {
    this.getFloorPlans();
  }

  render() {
    const { propertyId, floorPlans, isLoading, redirect } = this.state;
    console.log(floorPlans)
    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <FloorPlansList floorPlans={floorPlans} deleteFloorPlan={this.deleteFloorPlan} updateValues={this.updateValues} />
      <NavLinkWrapper propertyId={propertyId} type="floorPlans" text="Add Floor plan" updateValues={this.updateValues} />

      <Switch>
        <Route exact path="/properties/:id/floor_plans/new" component={CreateFloorPlanForm}></Route>
        <Route path="/properties/:propertyId/floor_plans/:floorPlanId/edit" component={EditFloorPlanForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(FloorPlans);
