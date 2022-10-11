import React from "react";
import styles from "./Input.module.css";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleInput(e) {
    const currentValue = e.target.value;
    console.log(`text = ${this.state.text}`);
    console.log(`prevState = ${this.prevState}`)
    console.log(currentValue);

    if (currentValue === this.prevState) {
      console.log("remember this")
      return ;
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
export { Input };
=======
export default InputField;
>>>>>>> fc9d9a2 (Rename InputField)
