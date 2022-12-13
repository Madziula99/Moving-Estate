import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, MenuItem, FormHelperText, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import styles from "./FeatureForm.module.css";

class FeatureForm extends React.Component {
  state = {
    isDisabled: true,
    icon: this.props.icon || "",
    title: this.props.title || ""
  };

  handleChange(name, value) {
    this.setState({ [name]: value, isDisabled: true });
  }

  componentDidUpdate(prevProps, _) {
    const { icon, title } = this.state;
    if (
      this.state.isDisabled === false ||
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

  showDropdown() {
    const { mode, specifiedFeatures } = this.props;
    const { icon } = this.state;
    const allFeatures = ["paw", "pool", "fence"];

    if (mode === "create") {
      return <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={icon}
          onChange={e => this.handleChange("icon", e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {allFeatures.map(feature => {
            const disabled = specifiedFeatures.includes(feature);

            return <MenuItem key={feature} disabled={disabled} value={feature}>{feature.toUpperCase()}</MenuItem>
          })}
        </Select>
        <FormHelperText>Select feature</FormHelperText>
      </FormControl>
    }
  }

  render() {
    const { title, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
        {this.showDropdown()}
        <Input defaultValue={title} onChange={e => this.handleChange("title", e.target.value)} autoFocus className={styles.input} />
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled} className={styles.row_btn}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
      </form>
    </div>
  }
}

export { FeatureForm };
