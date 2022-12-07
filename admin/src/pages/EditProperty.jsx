import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import styles from "./EditProperty.module.css";

class EditProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
    propertyId: this.props.match.params.id,
    property: null
  };

  isLoggedIn() {
    this.setState({
      isLoading: true
    })
    fetch("/api/auth/current_user")
    .then(r => {
      if (r.status === 401) {
        this.setState({
          isLoading: false,
          redirect: "/"
        });
        return null;
      }
    })
  }

  async getProperty() {
    const { propertyId } = this.state;

    await fetch(`/api/properties/${propertyId}`)
      .then(res => {
        if (res.status === 404) throw new Error()
        return res.json()
      })
      .then(body => {
        const property = {
          id: body.id,
          title: body.title,
          description: body.description,
          locationCity: body.location[0],
          locationState: body.location[1],
          type: body.type,
          mode: body.mode,
          price: body.price,
          area: body.area,
          bedrooms: body.bedrooms,
          bathrooms: body.bathrooms
        };
        this.setState({
          property: property,
          isLoading: false
        })
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async updateProperty(values) {
    const { propertyId } = this.state;

    this.setState({ isSubmitting: true });

    await fetch(`/api/properties/${propertyId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
    .then(res => {
      this.setState({ redirect: `/properties/${propertyId}` });
      return res.json();
    })
    .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  componentDidMount() {
    this.isLoggedIn();
    this.getProperty();
  }

  returnToPropertyPage() {
    this.setState({ redirect: `/properties/${this.state.propertyId}` });
  }

  render() {
    const { redirect, property, isSubmitting, isLoading } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    if (property) {
      return <>
        <div className={styles.center}>
          <h2>Edit property: {property.id}</h2>
        </div>
        <PropertyForm
          values={property}
          handleSubmit={newValues => this.updateProperty(newValues)}
          handleCancel={() => this.returnToPropertyPage()}
          state={isSubmitting ? "submitting" : "ready"} />
      </>
    }
  }
}

export default withRouter(EditProperty);
