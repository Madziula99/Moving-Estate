import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./ListItemLinks.module.css";

class ListItemLinks extends React.Component {
  render() {
    const { editPath, deletePath, aboutProps } = this.props;

    return (
      <>
        <NavLink
          to={{
            pathname: editPath,
            aboutProps: aboutProps,
          }}
          className={styles.nav_link}
        >
          <Button sx={{ m: 1, p: 1 }} variant="contained">
            Edit
          </Button>
        </NavLink>
        <NavLink
          to={{
            pathname: deletePath,
          }}
          className={styles.nav_link}
        >
          <Button sx={{ m: 1, p: 1 }} variant="contained">
            Delete
          </Button>
        </NavLink>
      </>
    );
  }
}

export { ListItemLinks };
