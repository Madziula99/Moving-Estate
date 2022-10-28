import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Spinner } from "../Spinner/Spinner.jsx";
import styles from "./AgentInfo.module.css";

class AgentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isSuccess: false,
      contactForm: true
    }
  }

  async postMessage(clientData) {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...clientData })
    }).then(r => r.json());
  }

  submitHandler = () => {
    const { email, propertyId } = this.props;
    const clientData = {
      clientName: "Joe",//name
      clientEmail: "joe@email.com",//email
      clientMessage: "Hello, call me!",//textArea
      agentEmail: email,
      propertyId: propertyId
    };
    this.postMessage(clientData);
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
            {this.state.contactForm && <ContactForm onSubmit={this.submitHandler} />}
            {this.state.isSuccess && <><p className={styles.thank_you}>Thank you!</p>
            <p className={styles.your_message}>Your message was sent successfully. Our agent will contact you as soon as possible! </p></>}
            {this.state.isLoading && <Spinner />}
          </div>
        </div>
      </section>
    );
  }
}

export { AgentInfo };
