import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import styles from "./Amenities.module.css";

class Amenities extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
    isLoading: false
  };

  async createAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateProps } = this.props;

    this.setState({ isLoading: true });

    await fetch(`/api/properties/${propertyId}/amenities`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: amenityTitle })
    }).then(r => {
      this.setState({
        isLoading: false
      });

      updateProps();

      return r.json();
    });
  }

  async deleteAmenity(amenityTitle) {
    const { propertyId } = this.state;
    const { updateProps } = this.props;

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

      updateProps();

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

    return <div className={styles.amenities_wrapper}>
      {amenities.map(item => {
        return <FormControlLabel
          key={item.title}
          control={<Checkbox defaultChecked={item.available} onChange={() => this.isChecked(item)} size="small" />}
          label={item.title}
        />
      })}
    </div>
  }
}

export { Amenities };
