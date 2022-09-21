import React, { Children } from "react";
import classes from "./Header.module.css";
import logo from "../pictures/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={classes.header_line}></div>
        <div className={classes.header_wrapper}>
          <div className={classes.header}>
            <img className={classes.header_logo} src={logo} alt="logo" />
            <h2 className={classes.header_text}>{this.props.children}</h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
