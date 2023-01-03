import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo.jsx";
import { Button } from "@mui/material";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.header_center}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <h2>{this.props.message}</h2>
          <Button variant="contained" href="/api/auth/logout">
            Sign Out
          </Button>
        </div>
      </header>
    );
  }
}

export { Header };
