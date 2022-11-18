import React from "react";
import { Formik } from "formik";
import { Input } from "../Input/Input.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./CreateAgentForm.module.css";

class CreateAgentForm extends React.Component {
  render() {
    const { disableCreateMode } = this.props;

    return <Formik
      initialValues={{ name: "", email: "", location: "", photo: "" }}
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
        disableCreateMode()
        // updating data in database needed

        actions.setSubmitting(false);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <Menu href="/admin/agents" />
          <Input label="Name: " type="text" name="name" data={props} />
          <Input label="Email: " type="email" name="email" data={props} />
          <Input label="Location: " type="text" name="location" data={props} />
          <Input label="Photo: " type="text" name="photo" data={props} />
        </form>
      )}
    </Formik>
  }
}

export { CreateAgentForm };
