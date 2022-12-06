import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input } from "@mui/material";
import styles from "./ImageForm.module.css";

class ImageForm extends React.Component {
  state = {
    currentLink: this.props.link,
    isDisabled: true
  };

  handleChange(currentLink) {
    this.setState({ currentLink: currentLink });
  }

  onSave() {
    const { link, handleSubmit } = this.props;
    const { currentLink } = this.state;

    if (currentLink !== link) handleSubmit(currentLink)
  }

  render() {
    const { link } = this.props;

    return <form className={styles.form}>
      <Input defaultValue={link} onChange={e => this.handleChange(e.target.value)} className={styles.input} />
      <NavLink to="/properties/images">
        <Button variant="contained" onClick={() => this.onSave()} className={styles.row_btn}>Save</Button>
      </NavLink>
      <NavLink to="/properties/images"><Button variant="contained" className={styles.row_btn}>x</Button></NavLink>
    </form>
  }
}

export { ImageForm };
