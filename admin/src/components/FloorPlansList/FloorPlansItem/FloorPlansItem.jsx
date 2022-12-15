import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./FloorPlansItem.module.css";

class FloorPlansItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  render() {
    const { floorPlan, deleteFloorPlan } = this.props;
    const { propertyId } = this.state;

    return <div className={styles.wrapper}>
      <img src={floorPlan.url} className={styles.image} alt="" />
      <p>{floorPlan.name}</p>
      <NavLink
        to={{ pathname: `/properties/${propertyId}/floor_plans/${floorPlan.floorPlanId}/edit`, aboutProps: { name: floorPlan.name, url: floorPlan.url } }}
        className={styles.nav_link}
      >
        <Button sx={{ m:1 }} variant="contained">...</Button>
      </NavLink>
      <Button
        variant="contained"
        onClick={() => deleteFloorPlan(floorPlan.floorPlanId)}
      >
       X
      </Button>
    </div>
  }
}

export default withRouter(FloorPlansItem);