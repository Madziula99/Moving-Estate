import React from "react";
import styles from "./PageWrapper.module.css";

class PageWrapper extends React.Component {
  render() {
    return <div className={styles.wrapper}>
      {this.props.children}
    </div>
}
}

export { PageWrapper };
