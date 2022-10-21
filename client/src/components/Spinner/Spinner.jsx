import React from "react";
import styles from "./Spinner.module.css";

class Spinner extends React.Component {
  render() {
    return <div className={styles.spinner_wrapper}>
      <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  }
}

export { Spinner };
