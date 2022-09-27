import React from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    return (
      <button className={this.className()} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }

  className() {
    const names = [styles.button, styles[this.props.type]];
    this.props.roundedLeft && names.push(styles.rounded_left);
    this.props.roundedRight && names.push(styles.rounded_right);
    this.props.isFocused && names.push(styles.focused);
    return names.join(" ");
  }
}

export default Button;
