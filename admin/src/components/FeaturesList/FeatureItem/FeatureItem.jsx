import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { ReactComponent as PawIcon } from "./assets/paw.svg";
import { ReactComponent as PoolIcon } from "./assets/pool.svg";
import { ReactComponent as FenceIcon } from "./assets/fence.svg";
import styles from "./FeatureItem.module.css";

class FeaturesItem extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  icon() {
    switch(this.props.feature.feature) {
      case "paw": return <PawIcon className={styles.feature_component} />;
      case "pool": return <PoolIcon className={styles.feature_component} />;
      case "fence": return <FenceIcon className={styles.feature_component} />;
      default: return null;
    }
  }

  render() {
    const { feature, deleteFeature } = this.props;
    const { propertyId } = this.state;

    return <div className={styles.wrapper}>
      {this.icon()}
      <p>{feature.title}</p>
      <NavLink
        to={{ pathname: `/properties/${propertyId}/features/${feature.feature}/edit`, aboutProps: { feature: feature } }}
        className={styles.nav_link}
      >
        <Button variant="contained">
          ...
        </Button>
      </NavLink>
      <Button variant="contained" onClick={() => deleteFeature(feature.feature)}>x</Button>
    </div>
  }
}

export default withRouter(FeaturesItem);
