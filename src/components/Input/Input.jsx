import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  state = {
    value: this.props.value || ""
  }

  updateValue = (inputText) => {
    this.setState({
      value: inputText.target.value
    });
  }

  notifyParameter = () => {
    if (this.props.value === this.state.value) return;
    this.props.onChange(this.state.value)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value === this.props.value) return;
    this.setState({
      value: this.props.value
    })
  }

  className() {
    const classes = [styles.input_field];
    this.props.width === "half" && classes.push(styles.input_field_half);
    return classes.join(" ");
  }

  render() {
    const { type, placeholder } = this.props;
    return (
      (type === undefined ||
      type === "text" ||
      type === "number" ) && <input
        className = { this.className() }
        type = { type || "text" }
        placeholder = { placeholder }
        value = { this.state.value }
        onBlur = { this.notifyParameter }
        onChange = {this.updateValue}
      />
    )
  }
}

export { Input };
