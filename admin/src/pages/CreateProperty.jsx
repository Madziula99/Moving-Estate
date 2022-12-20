import React from "react";
import { Redirect } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class CreateProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
    property: {
      title: "",
      description: "",
      locationCity: "",
      locationState: "",
      type: "",
      mode: "",
      price: "",
      area: "",
      bedrooms: "",
      bathrooms: ""
    }
  };

  isLoggedIn() {
    this.setState({ isLoading: true });

    fetch("/api/auth/current_user")
      .then(res => {
        if (res.status === 401) {
          this.setState({
            isLoading: false,
            redirect: "/"
          });
          return null;
        }
      })
  }

  createProperty = values => {
    this.setState({ isSubmitting: true, isLoading: true });

    fetch(`/api/properties`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(res => {
        if (res.status === 404) throw new Error();
        return res.json();
      })
      .then(body => {
        this.setState({
          isLoading: false,
          redirect: `/properties/${body.property.id}`
        });
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  returnToProperties = () => {
    this.setState({ redirect: "/properties" });
  }

  componentDidMount() {
    this.isLoggedIn();
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { redirect, isSubmitting, property, isLoading } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    return <PropertyForm
      values={property}
      onSubmit={this.createProperty}
      onCancel={this.returnToProperties}
      state={isSubmitting ? "submitting" : "ready"}
      title="Create a new property:"
    />
  }
}

export { CreateProperty };
