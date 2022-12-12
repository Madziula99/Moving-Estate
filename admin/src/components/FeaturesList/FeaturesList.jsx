import React from "react";
import FeaturesItem from "../FeaturesItem/FeaturesItem.jsx";

class FeaturesList extends React.Component {
  render() {
    const { features, updateValues, deleteFeature } = this.props;

    return features.map(feature => <FeaturesItem feature={feature} deleteFeature={deleteFeature} updateValues={updateValues} key={feature.feature} />);
  }
}

export { FeaturesList };
