import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { FeatureForm } from "../components/FeatureForm/FeatureForm.jsx";

class EditFeatureForm extends React.Component {
  state = {
    propertyId: this.props.match.params.propertyId,
    icon: this.props.icon,
    title: this.props.title
  };

  updateFeature(icon, title) {
    const { propertyId } = this.state;
    const { updateValues } = this.props.location.aboutProps;

    fetch(`/api/properties/${propertyId}/features/${icon}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title: title })
    }).then(r => {
      updateValues();

      return r.json();
    });
  }

  render() {
    const { propertyId } = this.state;

    if (this.props.location.aboutProps === undefined) return <Redirect to={`/properties/${propertyId}/features`} />;

    const { icon, title } = this.props.location.aboutProps;

    return <FeatureForm propertyId={propertyId} icon={icon} title={title} handleSubmit={(icon, title) => this.updateFeature(icon, title)} />
  }
}

export default withRouter(EditFeatureForm);
