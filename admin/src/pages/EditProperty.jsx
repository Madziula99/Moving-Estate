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
    isLoggedIn: false,
    propertyId: this.props.match.params.id,
    property: {}
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

  async getProperty() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    const email = await this.checkEmail();

    if (email) {
      await fetch(`/api/properties/${propertyId}`)
        .then(r => {
          if (r.status === 404) {
            throw new Error();
          } else {
            r.json().then(data => {
              const { id, title, location, description, type, mode, price, area, bedrooms, bathrooms } = data;
              const property = { id, title, description, type, mode, price, area, bedrooms, bathrooms };
              property.locationCity = location[0];
              property.locationState = location[1];

              this.setState({
                property: property,
                isLoading: false,
                isLoggedIn: true
              })
            });
          }
        })
        .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
    }
  }

  async updateProperty(values) {
    const { propertyId } = this.state;

    this.setState({ isSubmitting: true });

    await fetch(`/api/properties/${propertyId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r => {
      this.setState({ redirect: `/properties/${propertyId}` });

      return r.json();
    });
  }

  componentDidMount() {
    this.getProperty();
  }

  render() {
    const { redirect, property, isSubmitting, isLoading, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    if (Object.keys(property).length) {
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
