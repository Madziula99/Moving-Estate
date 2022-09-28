import React from "react";
import { ReactComponent as PawIcon } from "./icons/paw.svg";
import { ReactComponent as PoolIcon } from "./icons/pool.svg";
import { ReactComponent as FenceIcon } from "./icons/fence.svg";
import styles from "./Feature.module.css";

class Feature extends React.Component {
  icon() {
    switch(this.props.icon) {
      case "paw": return <PawIcon />;
      case "pool": return <PoolIcon />;
      case "fence": return <FenceIcon />;
      default: return null;
    }
  }

    render() {
    return <div className={styles.feature_component}>
      {this.icon()}
      <span className={styles.feature_title}>{this.props.children}</span>
    </div>
  }
}

export default Feature;
