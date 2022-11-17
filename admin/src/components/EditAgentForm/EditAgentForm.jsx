import React from "react";
import { Formik } from "formik";
import { Input } from "../Input/Input.jsx";
import { MenuButton } from "../MenuButton/MenuButton.jsx";
import styles from "./EditAgentForm.module.css";

class EditAgentForm extends React.Component {
  render() {
    const { values, disableEditMode } = this.props;

    return <Formik
      initialValues={values}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          disableEditMode();
          // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <MenuButton type="submit" text="Save" />
          <Input label="Name: " type="text" name="name" data={props} />
          <Input label="Email: " type="email" name="email" data={props} />
          <Input label="Location: " type="text" name="location" data={props} />
          <Input label="Photo: " type="text" name="photo" data={props} />
          {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
        </form>
      )}
    </Formik>
  }
}

export { EditAgentForm };
