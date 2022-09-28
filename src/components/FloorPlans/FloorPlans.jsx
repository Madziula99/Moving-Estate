import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import classes from "./FloorPlans.module.css";

class FloorPlans extends React.Component {
  render() {
    return (
      <section>
        <Subtitle>FLOOR PLANS</Subtitle>
        <div className={classes.floor_plans}>
        
          
        </div>        
      </section>
    );
  }
}

export default FloorPlans;