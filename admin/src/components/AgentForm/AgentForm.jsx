import React from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { Input } from "../Input/Input.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./AgentForm.module.css";

class AgentForm extends React.Component {
  async getAgent() {
    const agentId = this.props.match.params.id;

    const agentData = await fetch(`/api/agents/${agentId}`).then(r => r.json());

    return agentData;
  }

  async createAgent(values) {
    await fetch("/api/agents", {
      method: "POST",
      body: JSON.stringify(values)
    }).then(r => r.json());
  }

  async updateAgent(values) {
    const agentId = this.props.match.params.id;

    await fetch(`/api/agents/${agentId}`, {
      method: "PUT",
      body: JSON.stringify(values)
    }).then(r => r.json());
  }

  render() {
    const { enableMode, mode, onSubmitted } = this.props;

    const baseUrl = "/admin/agents";
    let redirect;
    const isEditMode = mode === "edit";
    let initialValues;

    if (isEditMode) {
      const currentAgentId = this.props.match.url.split("/").at(-2);

      // initialValues = this.getAgent(); - it is commented because we can't get data from api yet, so we use the fake one now
      initialValues = { name: "Kelly Lo", email: "lo@gmail.com", location: "Spain", id: 1, photo: "https://picsum.photos/id/500/300" };
      redirect = `${baseUrl}/${currentAgentId}`;
    } else {
      initialValues = { name: "", email: "", location: "", photo: "" };
      redirect = baseUrl;
    }

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
        // isEditMode ? this.updateAgent(values) : this.createAgent(values); - it is commented because we can't push data to api yet
        actions.setSubmitting(false);

        onSubmitted();
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

export default withRouter(AgentForm);
