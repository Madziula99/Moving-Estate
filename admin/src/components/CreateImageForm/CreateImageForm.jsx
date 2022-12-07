import React from "react";
import { withRouter } from "react-router-dom";
import { ImageForm } from "../ImageForm/ImageForm.jsx";

class CreateImageForm extends React.Component {
  async createImage(imageLink) {
    // const { propertyId } = this.props.match;
    const propertyId = "A001";

    console.log("create", imageLink)

    await fetch(`/api/properties/${propertyId}/images`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: imageLink })
    }).then(r => r.json());
  }

  render() {
    // const { propertyId } = this.props.match;
    const propertyId = "A001";

    return <ImageForm propertyId={propertyId} link="" handleSubmit={link => this.createImage(link)} />
  }
}

export default withRouter(CreateImageForm);
