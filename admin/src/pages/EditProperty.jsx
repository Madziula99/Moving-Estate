import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { PropertyForm } from "../components/PropertyForm/PropertyForm.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class EditProperty extends React.Component {
  state = {
    redirect: null,
    isSubmitting: false,
    // propertyId: "",
    isLoading: true,
    isLoggedIn: false,
    propertyId: this.props.match.params.id,
    property: {
      title: "Dream Apartment for Young Family",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est tellus, vitae facilisis est bibendum ut.",
      locationCity: "Pasadena",
      locationState: "California",
      type: "apartment",
      mode: "sale",
      price: 100500,
      area: 1320,
      bedrooms: 2,
      bathrooms: 2,
      images: [
        "https://preview.redd.it/s9edy9i5mbp41.jpg?auto=webp&s=232205a320f206393fbd55fe283564a6ccd95253",
        "http://apartmentsalesmelbourne.com.au/wp-content/uploads/2017/08/1311_60-Siddley-St_036.jpg",
        "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg",
        "http://montrosesquareapartments.com/blog/wp-content/uploads/2019/10/apartment-tour-checklist.jpeg"
      ],
      features: [
        { "feature": "pool", "title": "Large pool outside" },
        { "feature": "paw", "title": "Pets are allowed" }
      ],
      floor_plans: [
        { "name": "Ground Floor", "url": "https://picsum.photos/id/125/1000/600" },
        { "name": "First Floor", "url": "https://picsum.photos/id/126/1000/600" }
      ],
      amenities: [ "Air Conditioning", "Alarm Clock" ]
    },
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
                //property: data.property,
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
