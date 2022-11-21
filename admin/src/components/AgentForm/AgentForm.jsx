import React from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { StyledInput } from "../StyledInput/StyledInput.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./AgentForm.module.css";

class AgentForm extends React.Component {
  render() {
    const { values, handleSubmit, handleCancel, handleCreateOrUpdate } = this.props;

    return <Formik
      initialValues={values}
      validate={values => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required field";
        }

        if (!values.email) {
          errors.email = "Required field";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        handleCreateOrUpdate(values);
        handleSubmit();
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <Menu onCancelClick={handleCancel} />
          <StyledInput label="Name: " type="text" name="name" data={props} />
          <StyledInput label="Email: " type="email" name="email" data={props} />
          <StyledInput label="Location: " type="text" name="location" data={props} />
          <StyledInput label="Photo: " type="text" name="photo" data={props} />
        </form>
      )}
    </Formik>
  }
}

export default withRouter(AgentForm);
