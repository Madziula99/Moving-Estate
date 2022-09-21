import React, { Children } from "react";
import classes from "./Header.module.css";
import { ReactComponent as Logo } from "./logo.svg";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className={classes.header_line}></div>
        <div className={classes.header_wrapper}>
          <div className={classes.header}>
            <Logo className={classes.header_logo} />
            <span className={classes.header_text}>{this.props.children}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
