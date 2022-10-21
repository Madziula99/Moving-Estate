import React from "react";
import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import { Textarea } from "../Textarea/Textarea.jsx";
import styles from "./ContactForm.module.css";

class ContactForm extends React.Component {

  state = {
    isDisabled: true,
    isName: false,
    isEmail: false,
    isTextarea: false
  }

  sendFilterParams() {
    /*const sendingParams = {}
    for (let key in this.state.filterParams) {
      if (this.state.filterParams[key]) sendingParams[key] = this.state.filterParams[key]
    }
    return sendingParams;*/
    console.log("sended form")
  }

  submitHandler(event) {
    event.preventDefault();

    this.props.onSubmit(this.sendFilterParams());
  }

  render() {
    return <form className={styles.contact_form} onSubmit={e => this.submitHandler(e)}>
      <div className={styles.row}>
        <Input
          placeholder="Your Name*"
          onChange={value => console.log("Your name", value)}
          width="half" minlength="2" maxlength="10" required/>
        <Input
          placeholder="Your Email*"
          onChange={value => console.log("Your email", value)}
          type="email"
          width="half" required/>
      </div>
      <Textarea placeholder="Message to agent*"
        onChange={value => console.log("Your message", value)} required/>
      <Button type="submit" size="l" position="right" roundedLeft roundedRight disabled={this.state.isDisabled}>
        Send message
      </Button>
    </form>
  }
}

export { ContactForm };
