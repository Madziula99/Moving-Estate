import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Spinner } from "../Spinner/Spinner.jsx";
import classes from "./AgentInfo.module.css";

class AgentInfo extends React.Component {
  state = {
    loading: false,
    success: false,
    contactForm: true
  }

  render() {
    return (
      <section>
        <Subtitle>AGENT INFORMATION</Subtitle>
        <div className={classes.agent_info}>
          <div className={classes.info}>
            <img className={classes.agent} src={this.props.photo} alt="agent" />
              <div className={classes.name_location}>
                <h3 className={classes.name}>{this.props.name}</h3>
                <h4 className={classes.location}>{this.props.location}</h4>
              </div>
          </div>
          {this.state.contactForm && <ContactForm onSubmit={this.props.onSubmit} />}
          {this.state.success && <h2>Thank you!</h2>}
          {this.state.loading && <Spinner/>}
        </div>
      </section>
    );
  }
}

export default AgentInfo;
