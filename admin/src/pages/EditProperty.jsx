import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class EditProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    isLoading: true,
    propertyId: this.props.match.params.id,
    property: {}
  };

  isLoggedIn() {
    this.setState({ isLoading: true });

    fetch("/api/auth/current_user")
      .catch(() => this.setState({ isLoading: false, redirect: "/" }));
  }

  async getProperty() {
    const { propertyId } = this.state;

    await fetch(`/api/properties/${propertyId}`)
      .then(res =>  res.json())
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
        });
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  updateProperty = async values => {
    const { propertyId } = this.state;

    this.setState({ isSubmitting: true });

    await fetch(`/api/properties/${propertyId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(() => this.setState({ redirect: `/properties/${propertyId}` }))
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  componentDidMount() {
    this.isLoggedIn();
    this.getProperty();
  }

  returnToPropertyPage = () => {
    this.setState({ redirect: `/properties/${this.state.propertyId}` });
  }

  render() {
    const { redirect, property, isSubmitting, isLoading } = this.state;

    if (isLoading) return <Spinner />

    if (redirect) return <Redirect to={redirect} />

    return <PropertyForm
      values={property}
      onSubmit={this.updateProperty}
      onCancel={this.returnToPropertyPage}
      state={isSubmitting ? "submitting" : "ready"}
      title={`Edit property: ${property.id}`}
    />
  }
}

export default withRouter(EditProperty);
