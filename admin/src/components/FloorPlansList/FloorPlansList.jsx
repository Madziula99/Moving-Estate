import React from "react";
import FloorPlansItem from "../FloorPlansItem/FloorPlansItem.jsx";

class FloorPlansList extends React.Component {
  render() {
    const { floorPlans, updateValues, deleteFloorPlan } = this.props;

    return floorPlans.map(floorPlan => <FloorPlansItem floorPlan={floorPlan} deleteFloorPlan={deleteFloorPlan} updateValues={updateValues} key={floorPlan.name} />);
  }
}

export { FloorPlansList };
