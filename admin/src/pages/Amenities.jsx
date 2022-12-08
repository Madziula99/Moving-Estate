import React from "react";
import { withRouter } from "react-router-dom";
import { AmenitiesPageContent } from "../components/AmenitiesPageContent/AmenitiesPageContent.jsx";

class Amenities extends React.Component {
  constructor(props) {
    super(props);

    this.isChecked = this.isChecked.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
    };
  }

  async createAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateValues } = this.props;

    await fetch(`/api/properties/${propertyId}/amenities`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: amenityTitle })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  async deleteAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateValues } = this.props;

    if (amenityTitle.includes("/")) amenityTitle = amenityTitle.replace(/\//g, "%2F");
    if (amenityTitle.includes("&")) amenityTitle = amenityTitle.replace(/&/g, "%26");

    amenityTitle = amenityTitle.replace(/ /g, "%20");

    await fetch(`/api/properties/${propertyId}/amenities/${amenityTitle}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then(r => {
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
    const { amenities } = this.props;

    return <AmenitiesPageContent amenities={amenities} isChecked={this.isChecked} />
  }
}

export default withRouter(Amenities);
