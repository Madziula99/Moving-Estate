import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { ReactComponent as PawIcon } from "./assets/paw.svg";
import { ReactComponent as PoolIcon } from "./assets/pool.svg";
import { ReactComponent as FenceIcon } from "./assets/fence.svg";
import styles from "./FeaturesItem.module.css";

class FeaturesItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  icon() {
    switch(this.props.feature.feature) {
      case "paw": return <PawIcon />;
      case "pool": return <PoolIcon />;
      case "fence": return <FenceIcon />;
      default: return null;
    }
  }

  render() {
    const { feature, updateValues, deleteFeature } = this.props;
    const { propertyId } = this.state;

    return <div className={styles.wrapper}>
      <div className={styles.feature_component}>{this.icon()}</div>
      <p>{feature.title}</p>
      <div className={styles.buttons_wrapper}>
        <NavLink to={{ pathname: `/properties/${propertyId}/features/${feature.feature}/edit`, aboutProps: { title: feature.title, icon: feature.feature, updateValues: updateValues } }} className={styles.nav_link}>
          <Button variant="contained">...</Button>
        </NavLink>
        <Button variant="contained" onClick={() => deleteFeature(feature.feature)}>x</Button>
      </div>
    </div>
  }
}

export default withRouter(FeaturesItem);
