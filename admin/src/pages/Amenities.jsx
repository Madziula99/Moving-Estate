import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AmenitiesPageContent } from "../components/AmenitiesPageContent/AmenitiesPageContent.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.isChecked = this.isChecked.bind(this);
    this.updateValues = this.updateValues.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      amenities: [],
      isLoading: true,
      redirect: null
    };
  }

  async createAmenity(amenityTitle) {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    await fetch(`/api/properties/${propertyId}/amenities`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: amenityTitle })
    }).then(r => {
      this.setState({
        isLoading: false
      });

      this.updateValues();

      return r.json();
    });
  }

  deleteAmenity(amenityTitle) {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    if (amenityTitle.includes("/")) amenityTitle = amenityTitle.replace(/\//g, "%2F");
    if (amenityTitle.includes("&")) amenityTitle = amenityTitle.replace(/&/g, "%26");

    amenityTitle = amenityTitle.replace(/ /g, "%20");

    fetch(`/api/properties/${propertyId}/amenities/${amenityTitle}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then(r => {
      this.setState({
        isLoading: false
      });

      this.updateValues();

      return r.json();
    });
  }

  isChecked(item) {
    const { amenities } = this.state;
    const isChecked = amenities.find(amenity => amenity.title === item.title).available;

    if (isChecked) {
      this.deleteAmenity(item.title);
    } else {
      this.createAmenity(item.title);
    }
  }

  getAmenities() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}`)
      .then(res => {
        if (res.status === 404) throw new Error();
        return res.json();
      })
      .then(data => {
        this.setState({
          amenities: data.amenities,
          isLoading: false,
        })
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  componentDidMount() {
    this.getAmenities();
  }

  updateValues() {
    this.getAmenities();
  }

  render() {
    const { isLoading, amenities, redirect } = this.state;

    if (redirect) return <Redirect to={redirect} />

    if (isLoading) return <Spinner />;

    return <AmenitiesPageContent amenities={amenities} isChecked={this.isChecked} />
  }
}

export default withRouter(Amenities);
