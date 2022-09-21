import React from "react";
import classes from "./Header.module.css";
import logo from "../pictures/logo.png";

const propsFake = {
  title: "First page",
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.data = propsFake;
  }
  render() {
    return (
      <header>
        <div className={classes.header_line}></div>
        <div className={classes.header_wrapper}>
          <div className={classes.header}>
            <img className={classes.header_logo} src={logo} alt="logo" />
            <h2 className={classes.header_text}>
              {propsFake.title.toUpperCase()}
            </h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
