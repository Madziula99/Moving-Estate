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

  componentDidUpdate() {
    if (this.state.isDisabled) return;
    //TODO: have to update disabled
  }

  setContactFormParams= (type, value)=> {
    let contactFormParams = {...this.state.contactFormParams, [type]: value};
    this.setState({
      contactFormParams: contactFormParams
    });

    this.state.contactFormParams.name.length >= 2
      && this.state.contactFormParams.email.includes('@')
      && this.state.contactFormParams.email.includes('.')
      && this.state.contactFormParams.textArea.length > 0
      ? this.setState({ isDisabled: false }) : this.setState({ isDisabled: true })

    //console.log(`there i am set contactFormParams ${JSON.stringify(this.state.contactFormParams)}`)
    //console.log(this.state.contactFormParams.email.includes('@'), "do 2")
  }

  sendContactFormParams() {
    const sendingParams = {}
    for (let key in this.state.contactFormParams) {
      if (this.state.contactFormParams[key]) sendingParams[key] = this.state.contactFormParams[key]
    }
    //console.log(`sended params ${sendingParams}`)
    return sendingParams;
  }

  submitHandler(event) {
    event.preventDefault();

    this.props.onSubmit(this.sendContactFormParams());

    this.setState({
      contactFormParams: {
        name: "",
        email: "",
        textArea: ""
      },
      isDisabled: true
    })
    //console.log(`submitHandler`)
  }

  render() {
    const { contactFormParams } = this.state;
    return <form className={styles.contact_form} onSubmit={e => this.submitHandler(e)}>
      <div className={styles.row}>
        <Input
          placeholder="Your Name*"
          value={ contactFormParams.name}
          onChange={value => this.setContactFormParams("name", value)}
          width="half" minlength="2" maxlength="50" required/>
        <Input
          placeholder="Your Email*"
          value={ contactFormParams.email }
          onChange={value => this.setContactFormParams("email", value)}
          type="email"
          width="half" required/>
      </div>
      <Textarea placeholder="Message to agent*"
        value={ contactFormParams.textArea}
        onChange={value => this.setContactFormParams("textArea", value)} required
        maxlength="550"
      />
      <Button type="submit" size="l" position="right" roundedLeft roundedRight disabled={this.state.isDisabled}>
        Send message
      </Button>
    </form>
  }
}

export { ContactForm };
