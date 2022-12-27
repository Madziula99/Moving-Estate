import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@mui/material";
import styles from "./FloorPlanForm.module.css";

class FloorPlanForm extends React.Component {
  state = {
    isDisabled: true,
    url: this.props.url || "",
    name: this.props.name || ""
  };

  handleChange(name, value) {
    this.setState({ [name]: value, isDisabled: true });
  }

  componentDidUpdate(prevProps) {
    const { url, name, isDisabled } = this.state;

    if (
      isDisabled === false ||
      (url === prevProps.url && name === prevProps.name) ||
      name === "" ||
      url === ""
    ) return;

    this.setState({ isDisabled: false });
  }

  onSave = () => {
    const { handleSubmit } = this.props;
    const { url, name } = this.state;

    handleSubmit(url, name);
  }

  render() {
    const { url, name, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <>
      <form className={styles.form}>
        <label>Url:</label>
        <Input
          defaultValue={url}
          onChange={e => this.handleChange("url", e.target.value)}
          className={styles.input}
        />
        <label>Name:</label>
        <Input
          defaultValue={name}
          onChange={e => this.handleChange("name", e.target.value)}
          className={styles.input}
        />
        <NavLink
          onClick={e => isDisabled && e.preventDefault()}
          to={`/properties/${propertyId}/floor_plans`}
          className={styles.nav_link}
        >
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled}>
            Save
          </Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/floor_plans`} className={styles.nav_link}>
          <Button variant="contained">x</Button>
        </NavLink>
      </form>
    </>
  }
}

export { FloorPlanForm };
