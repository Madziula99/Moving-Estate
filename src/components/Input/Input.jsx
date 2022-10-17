import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || ""
    }
  }

  handleInputBlur = (inputText) => {
    this.props.onChange(inputText.target.value);
  }

  componentDidUpdate(prevprops, _) {
    if (prevprops.value === this.props.value) return;

    this.setState({
      value: this.props.value,
    });
  }

  render() {
    const { type, placeholder } = this.props;
    return (
      (type === undefined ||
      type === "text" ||
      type === "number" ) && <input
        className = { styles.input_field }
        type = { type || "text" }
        placeholder = { placeholder }
        defaultValue = { this.state.value }
        onBlur = { this.handleInputBlur }
      />
    )
  }
}

export { Input };
