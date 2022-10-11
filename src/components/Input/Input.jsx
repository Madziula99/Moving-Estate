import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'cat',
    }
  }

  handleInput(e) {
    const currentValue = e.target.value;
    console.log(currentValue)
    if (currentValue === this.state.text) {
      this.setState((prevState, props) => {
        return { text: prevState.text };
      });
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

export { Input };
