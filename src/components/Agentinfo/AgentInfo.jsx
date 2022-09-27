import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import classes from "./AgentInfo.module.css";
import ContactInfoItem from "../ContactInfoItem/ContactInfoItem.jsx";

class AgentInfo extends React.Component {
  render() {
    return (
      <section>
        <Subtitle>AGENT INFORMATION</Subtitle>
        <div className={classes.agent_info}>
          <img className={classes.agent} src={this.props.photo} alt="agent" />
          <div className={classes.info}>
            <h3 className={classes.name}>{this.props.name}</h3>
            <h4 className={classes.location}>{this.props.location}</h4>
            <div className={classes.grey_line}></div>
            <ContactInfoItem type="email" isFooter={false}>
              {this.props.email}
            </ContactInfoItem>
            <ContactInfoItem type="phone" isFooter={false}>
              {this.props.phone}
            </ContactInfoItem>           
          </div>
        </div>
      </section>
    );
  }
}

export default AgentInfo;
