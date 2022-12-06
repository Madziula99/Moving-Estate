import React from "react";
import { Redirect } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class CreateProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
    isLoggedIn: false,
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
      bathrooms: "",
      images: [],
      features: [],
      floor_plans: [],
      amenities: []
    }
  };

  async checkEmail() {
    this.setState({
      isLoading: true
    })
    return await fetch("/api/auth/current_user")
      .then(r => {
        if (r.status === 401) {
          this.setState({ isLoading: false });
          return null;
        } else {
          this.setState({
            isLoggedIn: true,
            isLoading: false
          })
          return r.json().then(({ user }) => user.emails[0].value );
        }
      })
  }

  async createProperty(values) {
    this.setState({ isSubmitting: true, isLoading: true });

    const email = await this.checkEmail();
    console.log("email", email)

    if (email) {
      await fetch(`/api/properties`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values)
      }).then(r => {
          if (r.status === 404) {
            throw new Error();
          } else {
            r.json().then(data => {
              console.log("data", data)
              this.setState({
                isLoading: false,
                redirect: `/properties/${data.property.id}`
              })
            });
          }
        })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
    }
    console.log('try submit')
  }

  returnToProperties() {
    this.setState({ redirect: "/properties" });
  }

  componentDidMount() {
    this.checkEmail();
  }

  render() {
    const { redirect, isSubmitting, property, isLoading, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <PropertyForm
      values={{ ...property }}
      handleSubmit={newValues => this.createProperty(newValues)}
      handleCancel={() => this.returnToProperties()}
      state={isSubmitting ? "submitting" : "ready"}
    />
  }
}

export { CreateProperty };
