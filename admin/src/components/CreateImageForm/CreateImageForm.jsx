import React from "react";
import { withRouter } from "react-router-dom";
import { ImageForm } from "../ImageForm/ImageForm.jsx";

class CreateImageForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  async createImage(imageLink) {
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;

    await fetch(`/api/properties/${propertyId}/images`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: imageLink })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    return <ImageForm propertyId={propertyId} link="" handleSubmit={link => this.createImage(link)} />
  }
}

export default withRouter(CreateImageForm);
