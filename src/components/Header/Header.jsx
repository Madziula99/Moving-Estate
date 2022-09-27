import React from "react";
import Logo from "../Logo/Logo.jsx";
import classes from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.header_center}>
          <Logo isFooter={false} />
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;
