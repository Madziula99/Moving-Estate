import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, MenuItem, FormHelperText, FormControl } from "@mui/material";
import { Modal } from "../Modal/Modal.jsx";
import Select from "@mui/material/Select";
import styles from "./FeatureForm.module.css";

class FeatureForm extends React.Component {
  state = {
    isDisabled: true,
    icon: this.props.icon || "",
    title: this.props.title || "",
    allFeatures: ["paw", "pool", "fence"]
  };

  handleChange(name, value) {
    this.setState({ [name]: value, isDisabled: true });
  }

  componentDidUpdate(prevProps) {
    const { icon, title, isDisabled } = this.state;

    if (
      isDisabled === false ||
      (icon === prevProps.icon && title === prevProps.title) ||
      title === "" ||
      icon === ""
    ) return;

    this.setState({ isDisabled: false });
  }

  onSave = () => {
    const { handleSubmit } = this.props;
    const { icon, title } = this.state;

    handleSubmit(icon, title);
  }

  render() {
    const { propertyId, features, editMode } = this.props;
    const { icon, title, allFeatures, isDisabled } = this.state;

    return <Modal>
      <form className={styles.form}>
        <FormControl sx={{ m: 2, minWidth: 120 }}>
          <Select
            value={icon}
            onChange={e => this.handleChange("icon", e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {allFeatures.map(option => {
              return <MenuItem
                key={option}
                disabled={features.some(feature => feature.feature === option) || editMode}
                value={option}
              >
                {option.toUpperCase()}
              </MenuItem>
            })}
          </Select>
          <FormHelperText>Select feature</FormHelperText>
        </FormControl>
        <Input
          defaultValue={title}
          onChange={e => this.handleChange("title", e.target.value)}
          className={styles.input}
        />
        <NavLink
          onClick={event => isDisabled && event.preventDefault()}
          to={`/properties/${propertyId}/features`}
          className={styles.nav_link}
        >
          <Button
            sx={{m: 1, p: 1}}
            variant="contained"
            onClick={this.onSave}
            disabled={isDisabled}
          >
            Save
          </Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}>
          <Button sx={{ m: 1, p: 1 }} variant="contained">
            Cancel
          </Button>
        </NavLink>
      </form>
    </Modal>
  }
}

export { FeatureForm };
