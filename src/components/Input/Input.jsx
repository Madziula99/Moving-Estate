import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  state = {
    value: this.props.value || ""
  }

  handleInputBlur = (inputText) => {
    const currentValue = inputText.target.value;

    if (currentValue === this.state.value) return;

    this.setState({
      value: currentValue
    });
  }

  componentDidUpdate(_, prevState) {

    //TODO: if propsy !=== no onchange
    if (prevState.value === this.state.value) return;

    this.props.onChange(this.state.value);
  }

  render() {
    const { type, placeholder } = this.props;
    let key = 1;
    return (
      (type === undefined ||
      type === "text" ||
      type === "number" ) && <input
        className = { styles.input_field }
        type = { type || "text" }
        placeholder = { placeholder }
        defaultValue = { this.state.value }
        onBlur = { this.handleInputBlur }
        key={ key++ }
      />
    )
  }
}

export { Input };
