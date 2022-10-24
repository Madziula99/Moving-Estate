import React from "react";
import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import { Textarea } from "../Textarea/Textarea.jsx";
import styles from "./ContactForm.module.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactFormParams: {
        name: "",
        email: "",
        textArea: ""
      },
      isDisabled: true
    }
  }

  componentDidUpdate(_, prevState) {
    if (JSON.stringify(prevState.contactFormParams) === JSON.stringify(this.state.contactFormParams)) return;
    this.checkForm();
  }

  setContactFormParams= (type, value)=> {
    let contactFormParams = {...this.state.contactFormParams, [type]: value};
    this.setState({
      contactFormParams: contactFormParams
    });
  }

  checkForm() {
    console.log(this.state.contactFormParams)
    let isDisabled = false;
    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (Object.values(this.state.contactFormParams).some(val => val === "") || emailExpression.test(this.state.contactFormParams.email) === false) {
      isDisabled = true
    }
    this.setState({ isDisabled: isDisabled })
  }

  submitHandler(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.contactFormParams);

    this.setState({
      contactFormParams: {
        name: "",
        email: "",
        textArea: ""
      },
      isDisabled: true
    })
  }

  render() {
    const { contactFormParams } = this.state;
    return <form className={styles.contact_form} onSubmit={e => this.submitHandler(e)}>
      <div className={styles.row}>
        <Input
          placeholder = "Your Name*"
          value = { contactFormParams.name }
          onChange = {value => this.setContactFormParams("name", value)}
          width = "half" minlength = "1" maxlength = "50" required/>
        <Input
          placeholder = "Your Email*"
          value = { contactFormParams.email }
          onChange = {value => this.setContactFormParams("email", value)}
          type = "email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          width="half" required />
      </div>
      <Textarea placeholder = "Message to agent*"
        value = { contactFormParams.textArea}
        onChange = {value => this.setContactFormParams("textArea", value)} required
        maxlength = "550"
      />
      <Button type = "submit" size = "l" position = "right" roundedLeft roundedRight disabled={this.state.isDisabled}>
        Send message
      </Button>
    </form>
  }
}

export { ContactForm };
