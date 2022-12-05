import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class EditProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
    isLoggedIn: false,
    propertyId: this.props.match.params.id,
    property: {}
  };

  async getProperty() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

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
      await fetch(`/api/properties/${propertyId}`)
        .then(r => {
          if (r.status === 404) {
            throw new Error();
          } else {
            r.json().then(data => {
              this.setState({
                property: data.property,
                isLoading: false,
                isLoggedIn: true
              })
            });
          }
        })
        .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
    }

    await fetch(`/api/properties/${propertyId}`).then(r => {
      if (r.status === 404) {
        throw new Error();
      } else {
        return r.json().then(data => {
          this.setState({
            property: data.property,
          })
        });
      }
    }).catch(() => this.setState({ redirect: "/properties" }));
  }

  async updateProperty(values) {
    const { propertyId } = this.state;

    this.setState({ isSubmitting: true });

    await fetch(`/api/properties/${propertyId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    }).then(r => {
      this.returnToPropertyPage();

      return r.json();
    });
  }

  returnToPropertyPage() {
    const { propertyId } = this.state;

    this.setState({ redirect: `/properties/${propertyId}` });
  }

  componentDidMount() {
    this.getProperty();
  }

  render() {
    const { redirect, property, isSubmitting, isLoading, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <PropertyForm
        values={property}
        handleSubmit={newValues => this.updateProperty(newValues)}
        handleCancel={() => this.returnToPropertyPage()}
        state={isSubmitting ? "submitting" : "ready"}
      />
  }
}

export default withRouter(EditProperty);
