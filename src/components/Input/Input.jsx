import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    let textInput = e.target.value;
    this.setState({
      text: textInput
    })
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
        value={this.state.text}
        onChange={this.handleInput}
      />
    )
  }
}

export { Input };
