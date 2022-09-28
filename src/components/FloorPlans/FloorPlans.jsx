import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import classes from "./FloorPlans.module.css";

class FloorPlans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBtn: this.props.plans[0],
    };
  }

  showImage(e) {
    this.setState({ currentBtn: { name: e.target.innerText } });
  }

  render() {
    return (
      <section>
        <Subtitle>FLOOR PLANS</Subtitle>
        <div className={classes.floor_plans}>
          {this.props.plans.map((plan, i) => {
            return <React.Fragment key={`${i}-${plan.name}`}>
              <button className={classes.plan_btn} onClick={(e) => this.showImage(e)}>{plan.name}</button> 
            </React.Fragment>
          })}
          <img className={classes.floor_img} src={this.props.plans[1].url} alt={this.props.plans[1].url} />       
        </div>        
      </section>
    );
  }
}

export default FloorPlans;