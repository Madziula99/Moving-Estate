import React from "react";
import { Formik } from "formik";
import { StyledInput } from "../StyledInput/StyledInput.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./AgentForm.module.css";

class AgentForm extends React.Component {
  render() {
    const { values, handleSubmit, handleCancel, state } = this.props;
    const isDisabled = state === "submitting";

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
        handleSubmit(values);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <Menu onCancelClick={handleCancel} isDisabled={isDisabled} />
          <StyledInput isDisabled={isDisabled} label="Name: " type="text" name="name" data={props} />
          <StyledInput isDisabled={isDisabled} label="Email: " type="email" name="email" data={props} />
          <StyledInput isDisabled={isDisabled} label="Location: " type="text" name="location" data={props} />
          <StyledInput isDisabled={isDisabled} label="Photo: " type="text" name="photo" data={props} />
        </form>
      )}
    </Formik>
  }
}

export { AgentForm };
