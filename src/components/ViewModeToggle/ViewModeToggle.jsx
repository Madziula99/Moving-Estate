import React from "react";
import Button from "../Button/Button";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';
import styles from "./ViewModeToggle.module.css";

class ViewModeToggle extends React.Component {
  render() {
    return (
      <div className={styles.view_mode_wrapper}>
        <span>View Mode:</span>
        {this.viewModeButtons("grid")}
        {this.viewModeButtons("list")}
      </div>
    )
  }

  viewModeButtons(mode) {
    const currentMode = this.props.mode;
    const props = {
      type: "view_mode"
    }
    mode === currentMode && (props.isFocused = true);
    mode === "grid" ? props.roundedLeft = true : props.roundedRight = true;
    return (
      <Button
        {...props}
        onClick={() => {this.props.onChange(`${mode}`)}}
      >
        {this.icon(mode)}
      </Button>
    )
  }

  icon(mode) {
    switch(mode) {
      case "grid": return <GridModeIcon />;
      case "list": return <ListModeIcon />;
      default: return null;
    }
  }
}

export default ViewModeToggle;