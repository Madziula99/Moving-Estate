import React from "react";
import styles from "./OverlayForm.module.css";

class OverlayForm extends React.Component {
  render() {
    return <div className={styles.overlay}>
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    </div>
  }
}

export { OverlayForm };
