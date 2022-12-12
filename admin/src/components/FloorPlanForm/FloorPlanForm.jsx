import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, InputLabel, MenuItem, FormHelperText, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "./FloorPlanForm.module.css";

class FloorPlanForm extends React.Component {
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
    const { currentTitle } = this.props;
    if (currentTitle === value || value === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentTitle: value });
  }

  handleDropdownChange(event) {
    const { currentFeature } = this.props;
    if (currentFeature === event.target.value || event.target.value === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({currentFeature: event.target.value})
  };

  onSave() {
    const { feature, title, handleSubmit } = this.props;
    const { currentFeature, currentTitle } = this.state;

    if (currentFeature !== feature || currentTitle !== title) {
      handleSubmit(currentFeature, currentTitle)};
  }

  render() {
    const { title, propertyId } = this.props;
    const { isDisabled, currentFeature } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
        <Input defaultValue={title} onChange={e => this.handleInputChange(e.target.value)} autoFocus className={styles.input} />
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled} className={styles.row_btn}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
      </form>
    </div>
  }
}

export { FloorPlanForm };
