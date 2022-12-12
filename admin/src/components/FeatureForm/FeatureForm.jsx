import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, MenuItem, FormHelperText, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import styles from "./FeatureForm.module.css";

class FeatureForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);

    this.state = {
      isDisabled: true,
      currentFeature: this.props.icon || "",
      currentTitle: this.props.title || ""
    };
  }

  handleInputChange(value) {
    const { title } = this.props;
    const { currentFeature } = this.state;

    if (value === title || value === "" || currentFeature === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentTitle: value });
  }

  handleDropdownChange(value) {
    const { feature } = this.props;
    const { currentTitle } = this.state;

    if (value === feature || value === "" || currentTitle === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentFeature: value })
  };

  onSave() {
    const { feature, title, handleSubmit } = this.props;
    const { currentFeature, currentTitle } = this.state;

    if (currentFeature !== feature || currentTitle !== title) handleSubmit(currentFeature, currentTitle);
  }

  showDropdown() {
    const { mode, specifiedFeatures } = this.props;
    const { currentFeature } = this.state;
    const allFeatures = ["paw", "pool", "fence"];

    if (mode === "create") {
      return <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={currentFeature}
          onChange={e => this.handleDropdownChange(e.target.value)}
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
        <Input defaultValue={title} onChange={e => this.handleInputChange(e.target.value)} autoFocus className={styles.input} />
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled} className={styles.row_btn}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
      </form>
    </div>
  }
}

export { FeatureForm };
