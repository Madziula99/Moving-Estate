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

  async createProperty(values) {
    this.setState({ isSubmitting: true, isLoading: true });

    const email = await fetch("/api/auth/current_user")
      .then(r => {
        if (r.status === 401) {
          this.setState({ isLoading: false });
          return null;
        } else {
          return r.json().then(({ user }) => user.emails[0].value);
        }
      })

    if (email) {
      await fetch(`/api/properties`)
        .then(r => {
          if (r.status === 404) {
            throw new Error();
          } else {
            r.json().then(data => {
                this.setState({
                //property: data.property,
                isLoading: false,
                isLoggedIn: true
              })
            });
          }
        })
        .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
    }

    // await fetch("/api/properties", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(values)
    // }).then(r =>  r.json()).then(({ property }) => {
    //   this.setState({
    //     redirect: `/properties/${property.id}`
    //   });
    // });
    // this.setState({
    //   redirect: "/properties/A031"
    // });
  }

  returnToProperties() {
    this.setState({ redirect: "/properties" });
  }

  componentDidMount() {
    this.createProperty();
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
