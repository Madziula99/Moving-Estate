import React from "react";
import { MenuButton } from "../MenuButton/MenuButton.jsx";
import styles from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    const { href } = this.props;

    return <div className={styles.buttons_wrapper}>
      <MenuButton type="submit" text="Save" />
      <MenuButton href={href} text="Cancel" />
    </div>
  }
}

export { Menu };
