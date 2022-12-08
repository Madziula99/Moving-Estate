import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { ImageForm } from "../ImageForm/ImageForm.jsx";

class EditImageForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    imageId: this.props.match.params.imageId,
  };

  async updateImage(imageLink) {
    const { propertyId, imageId } = this.state;
    const { updateValues } = this.props.location.aboutProps;

    await fetch(`/api/properties/${propertyId}/images/${imageId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: imageLink })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/images`} />;

    const { link } = this.props.location.aboutProps;

    return <ImageForm propertyId={propertyId} link={link} handleSubmit={link => this.updateImage(link)} />
  }
}

export default withRouter(EditImageForm);
