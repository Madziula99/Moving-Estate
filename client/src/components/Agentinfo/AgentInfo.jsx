import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Spinner } from "../Spinner/Spinner.jsx";
import styles from "./AgentInfo.module.css";

class AgentInfo extends React.Component {
  state = {
    loading: true,
    success: false,
    contactForm: false
  }

  render() {
    return (
      <section>
        <Subtitle>AGENT INFORMATION</Subtitle>
        <div className={styles.agent_info}>
          <div className={styles.info}>
            <img className={styles.agent} src={this.props.photo} alt="agent" />
              <div className={styles.name_location}>
                <h3 className={styles.name}>{this.props.name}</h3>
                <h4 className={styles.location}>{this.props.location}</h4>
              </div>
          </div>
          <div className={styles.message}>
            {this.state.contactForm && <ContactForm onSubmit={this.props.onSubmit} />}
            {this.state.success && <h2>Thank you!</h2>}
            {this.state.loading && <Spinner />}
          </div>
        </div>
      </section>
    );
  }
}

export default AgentInfo;
