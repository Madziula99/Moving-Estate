import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@mui/material";
import styles from "./ImageForm.module.css";

class ImageForm extends React.Component {
  state = {
    currentLink: this.props.link,
    isDisabled: true,
  };

  handleChange(currentLink) {
    const { link } = this.props;

    if (currentLink === link || currentLink === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentLink: currentLink });
  }

  onSave = () => {
    const { handleSubmit } = this.props;
    const { currentLink } = this.state;

    handleSubmit(currentLink);
  };

  render() {
    const { link, propertyId } = this.props;
    const { isDisabled } = this.state;

    return (
      <form className={styles.form}>
        <label>Link: </label>
        <Input
          defaultValue={link}
          onChange={(e) => this.handleChange(e.target.value)}
          autoFocus
          className={styles.input}
        />
        <NavLink
          onClick={(e) => isDisabled && e.preventDefault()}
          to={`/properties/${propertyId}/images`}
          className={styles.nav_link}
        >
          <Button
            variant="contained"
            onClick={this.onSave}
            disabled={isDisabled}
          >
            Save
          </Button>
        </NavLink>
        <NavLink
          to={`/properties/${propertyId}/images`}
          className={styles.nav_link}
        >
          <Button variant="contained">Cancel</Button>
        </NavLink>
      </form>
    );
  }
}

export { ImageForm };
