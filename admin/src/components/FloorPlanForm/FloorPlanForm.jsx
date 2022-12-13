import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@mui/material";
import styles from "./FloorPlanForm.module.css";

class FloorPlanForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);

    this.state = {
      isDisabled: true,
      image: this.props.image || "",
      name: this.props.name || ""
    };
  }

  handleChange(name, value) {
    this.setState({ [name]: value, isDisabled: true });
  }

  componentDidUpdate(prevProps) {
    const { image, name, isDisabled } = this.state;

    if (
      isDisabled === false ||
      (image === prevProps.image && name === prevProps.name) ||
      name === "" ||
      image === ""
    ) return;

    this.setState({ isDisabled: false });
  }

  onSave() {
    const { handleSubmit } = this.props;
    const { image, name } = this.state;

    handleSubmit(image, name);
  }

  render() {
    const { image, name, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
        <label>Image:</label>
        <Input defaultValue={image} onChange={e => this.handleChange("image", e.target.value)} autoFocus className={styles.input} />
        <label>Name:</label>
        <Input defaultValue={name} onChange={e => this.handleChange("name", e.target.value)} className={styles.input} />
        <NavLink to={`/properties/${propertyId}/floor_plans`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/floor_plans`} className={styles.nav_link}><Button variant="contained">x</Button></NavLink>
      </form>
    </div>
  }
}

export { FloorPlanForm };
