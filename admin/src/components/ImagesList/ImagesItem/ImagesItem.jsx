import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./ImagesItem.module.css";

class ImagesItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  render() {
    const { image } = this.props;
    const { propertyId } = this.state;

    return (
      <div className={styles.wrapper}>
        <img src={image.link} className={styles.image} alt="" />
        <div className={styles.buttons_wrapper}>
          <NavLink
            to={{
              pathname: `/properties/${propertyId}/images/${image.imageId}/edit`,
              aboutProps: { link: image.link },
            }}
            className={styles.nav_link}
          >
            <Button variant="contained">...</Button>
          </NavLink>
          <NavLink
            to={{
              pathname: `/properties/${propertyId}/images/${image.imageId}/delete`,
              aboutProps: { link: image.link },
            }}
            className={styles.nav_link}
          >
            <Button variant="contained">x</Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(ImagesItem);
