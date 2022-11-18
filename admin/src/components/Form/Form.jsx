import React from "react";
import { Formik } from "formik";
import { Input } from "../Input/Input.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./Form.module.css";

class Form extends React.Component {
  render() {
    const { values, disableEditMode, disableCreateMode, mode } = this.props;
    const isEditMode = mode === "edit";
    const baseUrl = "/admin/agents";

    const initialValues = isEditMode ? values : { name: "", email: "", location: "", photo: "" };
    const disableMode = isEditMode ? disableEditMode : disableCreateMode;
    const redirect = isEditMode ? `${baseUrl}/${values.id}` : baseUrl;

    return <Formik
      initialValues={initialValues}
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
        disableMode();

        // updating data in database needed

        actions.setSubmitting(false);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <Menu href={redirect} />
          <Input label="Name: " type="text" name="name" data={props} />
          <Input label="Email: " type="email" name="email" data={props} />
          <Input label="Location: " type="text" name="location" data={props} />
          <Input label="Photo: " type="text" name="photo" data={props} />
        </form>
      )}
    </Formik>
  }
}

export { Form };
