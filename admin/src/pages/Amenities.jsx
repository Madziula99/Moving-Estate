import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AmenitiesPageContent } from "../components/AmenitiesPageContent/AmenitiesPageContent.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.isChecked = this.isChecked.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      amenities: [],
      isLoading: true,
      redirect: null
    };
  }

  createAmenity(amenityTitle) {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}/amenities`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: amenityTitle })
    }).then(r => {
      this.setState({
        isLoading: false
      });

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

  async getAmenities() {
    this.setState({ isLoading: true });

    const amenities = await this.fetchAmenities();

    this.setState({
      amenities: amenities,
      isLoading: false,
    });
  }

  async fetchAmenities() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => data.amenities)
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async componentDidUpdate() {
    const { amenities } = this.state;
    const updated = await this.fetchAmenities();

    if (JSON.stringify(amenities) === JSON.stringify(updated)) return;

    this.setState({ amenities: updated });
  }

  componentDidMount() {
    this.getAmenities();
  }

  render() {
    const { isLoading, amenities, redirect } = this.state;

    if (redirect) return <Redirect to={redirect} />

    if (isLoading) return <Spinner />

    return <AmenitiesPageContent amenities={amenities} isChecked={this.isChecked} />
  }
}

export default withRouter(Amenities);
