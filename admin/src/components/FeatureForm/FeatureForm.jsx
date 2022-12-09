import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, InputLabel, MenuItem, FormHelperText, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "./FeatureForm.module.css";

class FeatureForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSave = this.onSave.bind(this);

    this.state = {
      currentLink: this.props.link,
      isDisabled: true
    };
  }

  handleChange(currentLink) {
    const { link } = this.props;

    if (currentLink === link || currentLink === "") {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }

    this.setState({ currentLink: currentLink });
  }

  handleDropdownChange(event) {
    console.log(event.target.value)
  };

  onSave() {
    const { link, handleSubmit } = this.props;
    const { currentLink } = this.state;

    if (currentLink !== link) handleSubmit(currentLink);
  }

  SelectLabels() {
    
  }

  render() {
    const { link, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={1}
          onChange={this.handleDropdownChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="paw">Paw</MenuItem>
          <MenuItem value="pool">Pool</MenuItem>
          <MenuItem value="fence">Fence</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
        <Input defaultValue={link} onChange={e => this.handleChange(e.target.value)} autoFocus className={styles.input} />
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}>
          <Button variant="contained" onClick={this.onSave} disabled={isDisabled} className={styles.row_btn}>Save</Button>
        </NavLink>
        <NavLink to={`/properties/${propertyId}/features`} className={styles.nav_link}><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
      </form>
    </div>
  }
}

export { FeatureForm };
