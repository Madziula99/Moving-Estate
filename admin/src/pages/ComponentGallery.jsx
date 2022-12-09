import React from "react";
import { withRouter, Redirect } from "react-router-dom";

const features = [
  {icon: "paw", description: "Pets are allowed"},
  {icon: "pool", description: "Large pool"}
]

const floorplans = [
  {url: "https://picsum.photos/id/125/1000/600", name: "Ground Floor", floorPlanId: 1},
  {url: "https://picsum.photos/id/126/1000/600", name: "First Floor", floorPlanId: 2}
]

class ComponentGallery extends React.Component {

  render() {
    return <>
      {/* <FormsWrapper forms={[{ features: features }, { floorplans: floorplans }]} /> */}
      {/* <FloorplansForm values={{floorplans: floorplans}} /> */}
    </>
  }
}

export default withRouter(ComponentGallery);
