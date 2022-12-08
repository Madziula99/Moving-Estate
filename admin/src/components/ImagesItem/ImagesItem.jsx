import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./ImagesItem.module.css";

class ImagesItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  async deleteImage(imageId) {
    if (window.confirm("Are you sure that you want to remove this image?")) {

      const { propertyId } = this.state;
      const { updateValues } = this.props;

      await fetch(`/api/properties/${propertyId}/images/${imageId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => {
        updateValues();

        return r.json();
      });
    }
  }

  render() {
    const { image, updateValues } = this.props;
    const { propertyId } = this.state;

    return <div className={styles.wrapper}>
      <img src={image.link} className={styles.image} alt="" />
      <div className={styles.buttons_wrapper}>
        <NavLink to={{ pathname: `/properties/${propertyId}/images/${image.imageId}/edit`, aboutProps: { link: image.link, updateValues: updateValues } }} className={styles.nav_link}>
          <Button variant="contained">...</Button>
        </NavLink>
        <Button variant="contained" onClick={() => this.deleteImage(image.imageId)}>x</Button>
      </div>
    </div>
  }
}

export default withRouter(ImagesItem);
