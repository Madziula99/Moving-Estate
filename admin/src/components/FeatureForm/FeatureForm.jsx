import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@mui/material";
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

  onSave() {
    const { link, handleSubmit } = this.props;
    const { currentLink } = this.state;

    if (currentLink !== link) handleSubmit(currentLink);
  }

  render() {
    const { link, propertyId } = this.props;
    const { isDisabled } = this.state;

    return <div className={styles.overlay}>
      <form className={styles.form}>
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
