import React from "react";
import { MenuButton } from "../../controls/MenuButton/MenuButton.jsx";
import styles from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    const { onCancelClick, isDisabled, firstBtnText, secondBtnText } =
      this.props;

    return (
      <div className={styles.buttons_wrapper}>
        <MenuButton isDisabled={isDisabled} type="submit" text={firstBtnText} />
        <MenuButton handleClick={onCancelClick} text={secondBtnText} />
      </div>
    );
  }
}

export { Menu };
