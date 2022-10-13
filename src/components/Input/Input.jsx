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
    const { type, placeholder } = this.props;
    let key = 1;
    return (
      (type === undefined ||
      type === "text" ||
      type === "number" ) && <input
        className={ styles.input_field }
        type={ type || "text" }
        placeholder={ placeholder }
        defaultValue={ this.state.text }
        onBlur={ this.handleInputBlur }
        key={ key++ }
      />
    )
  }
}

export { Input };
