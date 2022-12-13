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
      currentImage: this.props.image || "",
      currentName: this.props.name || ""
    };
  }

  handleInputChange(value) {
    const { name } = this.props;
    const { currentImage } = this.state;

    if (value === name || value === "" || currentImage === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentName: value });
  }

  handleImageInputChange(value) {
    const { image } = this.props;
    const { currentName } = this.state;

    if (value === image || value === "" || currentName === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentImage: value });
  }

  onSave() {
    const { handleSubmit } = this.props;
    const { currentImage, currentName } = this.state;
    
    handleSubmit(currentImage, currentName);
  } 

  render() {
    const { image, name, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
        <label>Image:</label>
        <Input defaultValue={image} onChange={e => this.handleImageInputChange(e.target.value)} autoFocus className={styles.input} />
        <label>Name:</label>
        <Input defaultValue={name} onChange={e => this.handleInputChange(e.target.value)} autoFocus className={styles.input} />
        <NavLink to={`/properties/${propertyId}/floor_plans`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled} className={styles.row_btn}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/floor_plans`} className={styles.nav_link}><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
      </form>
    </div>
  }
}

export { FloorPlanForm };
