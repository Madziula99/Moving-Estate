import React from "react";
import { ReactComponent as LoadingSpinner } from "./spinner.svg";
import styles from "./Spinner.module.css";

class Spinner extends React.Component {
  render() {
    return <div className={styles.spinner_wrapper}>
      <LoadingSpinner />
    </div>
  }
}

export { Spinner };
