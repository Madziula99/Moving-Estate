import React from "react";
import { ReactComponent as PawIcon } from "./icons/paw.svg";
import { ReactComponent as PoolIcon } from "./icons/pool.svg";
import { ReactComponent as FenceIcon } from "./icons/fence.svg";
import styles from "./Feature.module.css";

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.icons = {
      paw: <PawIcon />,
      pool: <PoolIcon />,
      fence: <FenceIcon />,
    };
  }

  checkIcon() {
    if (this.icons[this.props.icon]) {
      return this.icons[this.props.icon]
    }
  }

  render() {
    return <div className={styles.feature_component}>
      {this.checkIcon()}
      <span className={styles.feature_title}>{this.props.children}</span>
    </div>
  }
}

export default Feature;
