import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkWrapper.module.css";

class NavLinkWrapper extends React.Component {
  render() {
    const { propertyId, text, type, disabled } = this.props;

    return <div className={styles.nav_link_wrapper}>
      <NavLink onClick={event => disabled && event.preventDefault()} to={`/properties/${propertyId}/${type}/new`} className={styles.nav_link}>
        <Button disabled={disabled} variant="contained">{text}</Button>
      </NavLink>
    </div>
  }
}

export { NavLinkWrapper };
