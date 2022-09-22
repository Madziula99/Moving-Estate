import React from "react";
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const type = this.props.type;
    const position = this.props.position;
    const selected = this.props.selected;

    return (
      <button
        className={`${styles.button} ${styles[position]} ${styles[type]} ${styles[selected]}`}
        onClick={this.props.onChange}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button;
