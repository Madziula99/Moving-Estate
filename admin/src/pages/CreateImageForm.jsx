import React from "react";
import { withRouter } from "react-router-dom";
import { ImageForm } from "../components/ImageForm/ImageForm.jsx";
import BasePage from "./BasePage.jsx";

class CreateImageForm extends BasePage {
  state = {
    propertyId: this.props.match.params.id,
  };

  createImage = imageLink => this.createAction({
    url: `/api/properties/${this.state.propertyId}/images`,
    values: { link: imageLink },
    redirect: `/properties/${this.state.propertyId}`
  })

  render() {
    const { propertyId } = this.state;

    return <ImageForm propertyId={propertyId} link="" handleSubmit={this.createImage} />;
  }
}

export default withRouter(CreateImageForm);
