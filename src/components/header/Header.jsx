import React from "react";
import classes from "./Header.module.css";
import Logo from "../logo/Logo.jsx";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={classes.header_line}></div>
        <div className={classes.header_wrapper}>
          <div className={classes.header}>
            <Logo isFooter={false} />
            <span className={classes.header_text}>{this.props.children}</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
