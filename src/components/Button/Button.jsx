import React from "react";
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const classes = [styles.button, styles[this.props.type]]
    this.props.roundedLeft && classes.push(styles.roundedLeft);
    this.props.roundedRight && classes.push(styles.roundedRight);
    this.props.isFocused && classes.push(styles.focused);

    return (
      <button className={classes.join(" ")} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;
