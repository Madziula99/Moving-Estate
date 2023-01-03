import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./FloorPlansItem.module.css";
import { NavLinksComponent } from "../../NavLinksComponent/NavLinksComponent";

class FloorPlansItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  render() {
    const { floorPlan } = this.props;
    const { propertyId } = this.state;

    return (
      <div className={styles.wrapper}>
        <img src={floorPlan.url} className={styles.image} alt="" />
        <p>{floorPlan.name}</p>
        <NavLinksComponent
          editPath={`/properties/${propertyId}/floor_plans/${floorPlan.floorPlanId}/edit`}
          deletePath={`/properties/${propertyId}/floor_plans/${floorPlan.floorPlanId}/delete`}
          aboutProps={{ name: floorPlan.name, url: floorPlan.url }}
        />
      </div>
    );
  }
}

export default withRouter(FloorPlansItem);
