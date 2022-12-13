import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./FloorPlansItem.module.css";

class FloorPlansItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  async deleteFloorPlan(floorPlanId) {
    if (window.confirm("Are you sure that you want to remove this floor plan?")) {

      const { propertyId } = this.state;
      const { updateValues } = this.props;

      await fetch(`/api/properties/${propertyId}/floor_plans/${floorPlanId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => {
        updateValues();
        return r.json();
      });
    }
  }

  render() {
    const { floorPlan, updateValues } = this.props;
    const { propertyId } = this.state;
    return <div className={styles.wrapper}>
      <img src={floorPlan.url} className={styles.image} alt="" />
      <p>{floorPlan.name}</p>
      <div className={styles.buttons_wrapper}>
        <NavLink to={{ pathname: `/properties/${propertyId}/floor_plans/${floorPlan.floorPlanId}/edit`, aboutProps: { name: floorPlan.name, image: floorPlan.url, floorPlanId: floorPlan.floorPlanId, updateValues: updateValues } }} className={styles.nav_link}>
          <Button variant="contained">...</Button>
        </NavLink>
        <Button variant="contained" onClick={() => this.deleteFloorPlan(floorPlan.floorPlanId)}>x</Button>
      </div>
    </div>
  }
}

export default withRouter(FloorPlansItem);
