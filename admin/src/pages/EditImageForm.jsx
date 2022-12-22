import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { ImageForm } from "../components/ImageForm/ImageForm.jsx";
import BasePage from "./BasePage.jsx";

class EditImageForm extends BasePage {
  state = {
    propertyId: this.props.match.params.propertyId,
    imageId: this.props.match.params.imageId,
  };

  updateImage = imageLink => this.updateAction({
    url: `/api/properties/${this.state.propertyId}/images/${this.state.imageId}`,
    values: { link: imageLink },
    failureRedirect: `/properties/${this.state.propertyId}`
  })

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/images`} />;

    const { link } = this.props.location.aboutProps;

    return <ImageForm propertyId={propertyId} link={link} handleSubmit={this.updateImage} />;
  }
}

export default withRouter(EditImageForm);
