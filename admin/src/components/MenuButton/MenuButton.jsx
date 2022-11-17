import React from "react";
import { Button } from "@mui/material";
import styles from "./MenuButton.module.css";

class MenuButton extends React.Component {
  render() {
    const { text, href, enableEditMode, type } = this.props;

    return <div className={styles.btn_wrapper}>
      <Button variant="contained" href={href} onClick={enableEditMode} type={type} className={styles.btn}>{text}</Button>
    </div>
  }
}

export { MenuButton };
