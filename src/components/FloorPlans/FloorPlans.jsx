import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import classes from "./FloorPlans.module.css";

class FloorPlans extends React.Component {
  render() {
    return (
      <section>
        <Subtitle>FLOOR PLANS</Subtitle>
        <div className={classes.floor_plans}>
         <button className={classes.plan_btn}>{this.props.plans[1].name}</button> 
          <img className={classes.floor_img} alt={this.props.plans[1].name} src={this.props.plans[1].url} />          
        </div>        
      </section>
    );
  }
}

export default FloorPlans;