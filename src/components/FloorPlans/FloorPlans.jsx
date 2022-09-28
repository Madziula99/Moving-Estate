import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import classes from "./FloorPlans.module.css";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlan: this.props.plans[0],
    };
  }

  showImage(plan) {
    this.setState({ currentPlan: plan });
  }

  render() {
    return (
      <section>
        <Subtitle>FLOOR PLANS</Subtitle>
        <div className={classes.floor_plans}>
          {this.props.plans.map((plan, i) => {
            return <React.Fragment key={`${i}-${plan.name}`}>
              <button className={classes.plan_btn} onClick={() => this.showImage(plan)}>{plan.name}</button> 
            </React.Fragment>
          })}
          <img className={classes.floor_img} src={this.state.currentPlan.url} alt={this.state.currentPlan.name} />       
        </div>        
      </section>
    );
  }
}

export default FloorPlans;