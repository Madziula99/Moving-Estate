import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkWrapper.module.css";

class NavLinkWrapper extends React.Component {
  render() {
    const { propertyId, text, updateValues } = this.props;

    return <div className={styles.nav_link_wrapper}>
      <NavLink to={{ pathname: `/properties/${propertyId}/images/new`, aboutProps: { updateValues: updateValues } }} className={styles.nav_link}>
        <Button variant="contained">{text}</Button>
      </NavLink>
    </div>
  }
}

export { NavLinkWrapper };
