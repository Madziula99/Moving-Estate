import React from "react";
import { MenuButton } from "../../controls/MenuButton/MenuButton.jsx";
import styles from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    const { onSubmitClick, onCancelClick, isDisabled, submitText } = this.props;

    return (
      <div className={styles.buttons_wrapper}>
        <MenuButton
          isDisabled={isDisabled}
          handleClick={onSubmitClick}
          type="submit"
          text={submitText}
        />
        <MenuButton handleClick={onCancelClick} text="Cancel" />
      </div>
    );
  }
}

export { Menu };
