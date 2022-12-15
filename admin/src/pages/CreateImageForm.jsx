import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { ImageForm } from "../components/ImageForm/ImageForm.jsx";

class CreateImageForm extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

  createImage = imageLink => {
    const { propertyId } = this.state;

    fetch(`/api/properties/${propertyId}/images`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ link: imageLink })
    }).catch(() => <Redirect to={`/properties/${propertyId}`} />);
  }

  render() {
    const { propertyId } = this.state;

    return <ImageForm propertyId={propertyId} link="" handleSubmit={this.createImage} />;
  }
}

export default withRouter(CreateImageForm);
