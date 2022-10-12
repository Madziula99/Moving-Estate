import React from "react";
import styles from "./Input.module.css";

<<<<<<< HEAD
class InputField extends React.Component {
=======
class Input extends React.Component {
>>>>>>> 4e6327e (Add Input folder)
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const currentValue = e.target.value;
<<<<<<< HEAD
    console.log(`text = ${this.state.text}`);
    console.log(`prevState = ${this.prevState}`)
    console.log(currentValue);

    if (currentValue === this.prevState) {
      console.log("remember this")
      return <></>;
=======

    if (currentValue === this.state.text) {
      return null;
>>>>>>> 4e6327e (Add Input folder)
    } else {
      this.setState({
        text: currentValue
      });
    }
  }

  render() {
    return (
      (this.props.type === undefined ||
      this.props.type === "text" ||
      this.props.type === "number" ) && <input
        id={this.props.id}
        className={styles.input_field}
        type={this.props.type || "text"}
        placeholder={this.props.placeholder}
        defaultValue={this.state.text}
        onBlur={this.handleInput}
      />
    )
  }
}

<<<<<<< HEAD

=======
>>>>>>> 0f0b804 (Change import)
export { Input };
