import React from "react";
import { Button } from "@mui/material";
import styles from "./MenuButton.module.css";

class MenuButton extends React.Component {
  render() {
    const { text, href, type } = this.props;

    return <Button variant="contained" href={href} type={type} className={styles.btn}>{text}</Button>
  }
}

export { MenuButton };
