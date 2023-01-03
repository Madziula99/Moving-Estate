import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo.jsx";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header_center}>
          <NavLink to={"/"}>
            <Logo />
          </NavLink>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export { Header };
