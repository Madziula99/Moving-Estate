import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import EditProperty from "./EditProperty.jsx";
import Messages from "./Messages.jsx";
import styles from "./Property.module.css";

class Property extends React.Component {
  state = {
    // property: {},
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
    propertyId: this.props.match.params.id,
    isLoading: true,
    isEditing: false,
    isLoggedIn: false,
    isMessagesPage: false,
    redirect: null
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
              console.log("meow")
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
  }

  componentDidMount() {
    this.getProperty();
  }

  render() {
    const { isLoading, property, propertyId, isEditing, isMessagesPage, redirect, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />;

    if (isEditing) return <EditProperty />

    if (isMessagesPage) return <Messages />

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <div className={styles.property_form_wrapper}>
      <div>
        <h2>Property page: {propertyId}</h2>
        <p><span className={styles.title}>Title: </span> {property.title}</p>
        <p><span className={styles.title}>Description: </span> {property.description}</p>
        <p><span className={styles.title}>Location city: </span>{property.locationCity}</p>
        <p><span className={styles.title}>Location state: </span>{property.locationState}</p>
        <p><span className={styles.title}>Type: </span>{property.type}</p>
        <p><span className={styles.title}>Mode: </span> {property.mode}</p>
        <p><span className={styles.title}>Price: </span>{property.price}</p>
        <p><span className={styles.title}>Area: </span>{property.area}</p>
        <p><span className={styles.title}>Bedrooms: </span>{property.bedrooms}</p>
        <p><span className={styles.title}>Bathrooms: </span> {property.bathrooms}</p>
      </div>
      <MenuButton text="..." handleClick={() => this.setState({ isEditing: true })} href={`/admin/properties/${propertyId}/edit`} />
    </div>
  }
}

export default withRouter(Property);
