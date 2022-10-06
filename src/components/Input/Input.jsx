import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabled: true,
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
    <>
      {
          this.props.type === "text" && <input
          id={this.props.id}
          className={styles.input_field}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleInput}
          value={this.state.text}
        />
      }
      {
        this.props.type === "button" && <input
        id={this.props.id}
        className={styles.input_button}
        type={this.props.type}
        value={this.props.value}
        disabled={this.state.disabled}
        />
      }
    </>
    )
  }
}

export { Input };
