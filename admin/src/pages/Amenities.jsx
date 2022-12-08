import React from "react";
import { withRouter } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { AmenitiesWrapper } from "../components/AmenitiesWrapper/AmenitiesWrapper.jsx";

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.isChecked = this.isChecked.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      isLoading: false
    };
  }

  async createAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateValues } = this.props;

    this.setState({ isLoading: true });

    await fetch(`/api/properties/${propertyId}/amenities`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: amenityTitle })
    }).then(r => {
      this.setState({
        isLoading: false
      });

      updateValues();

      return r.json();
    });
  }

  async deleteAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateValues } = this.props;

    this.setState({ isLoading: true });

    if (amenityTitle.includes("/")) amenityTitle = amenityTitle.replace(/\//g, "%2F")
    if (amenityTitle.includes("&")) amenityTitle = amenityTitle.replace(/&/g, "%26");

    amenityTitle = amenityTitle.replace(/ /g, "%20");

    await fetch(`/api/properties/${propertyId}/amenities/${amenityTitle}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then(r => {
      this.setState({
        isLoading: false
      });

      updateValues();

      return r.json();
    });
  }

  isChecked(item) {
    const { amenities } = this.props;
    const isChecked = amenities.find(amenity => amenity.title === item.title).available;

    if (isChecked) {
      this.deleteAmenity(item.title);
    } else {
      this.createAmenity(item.title);
    }
  }

  render() {
    const { isLoading } = this.state;
    const { amenities } = this.props;

    if (isLoading) return <Spinner />;

    return <AmenitiesWrapper amenities={amenities} isChecked={this.isChecked} />
  }
}

export default withRouter(Amenities);
