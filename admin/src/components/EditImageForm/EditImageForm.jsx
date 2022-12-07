import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { ImageForm } from "../ImageForm/ImageForm.jsx";

class EditImageForm extends React.Component {
  async updateImage(imageLink) {
    // const { propertyId, imageId } = this.props.match.params;
    const propertyId = "A001";
    const { imageId } = this.props.match.params;

    console.log("update", imageLink, imageId)

    await fetch(`/api/properties/${propertyId}/images/${imageId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: imageLink })
    }).then(r =>  r.json());
  }

  render() {
    // const { propertyId, imageId } = this.props.match.params;
    const propertyId = "A001";

    if (this.props.location.aboutProps === undefined) return <Redirect to="/properties/images" />;

    const { link } = this.props.location.aboutProps;

    return <ImageForm propertyId={propertyId} link={link} handleSubmit={link => this.updateImage(link)} />
  }
}

export default withRouter(EditImageForm);
