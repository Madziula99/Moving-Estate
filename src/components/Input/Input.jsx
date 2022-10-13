import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  state = {
    text: ""
  }

  handleInputBlur = (inputText) => {
    const currentValue = inputText.target.value;

    if (currentValue === this.state.text) return;

    this.setState({
      text: currentValue
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.text === this.state.text) return;

    this.props.onChange(this.state.text);
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
        onBlur={this.handleInputBlur}
      />
    )
  }
}

export { Input };
