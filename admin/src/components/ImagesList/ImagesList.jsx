import React from "react";
import ImagesItem from "../ImagesItem/ImagesItem.jsx";

class ImagesList extends React.Component {
  render() {
    const { images, updateValues, deleteImage } = this.props;

    return images.map(image => <ImagesItem image={image} key={image.link} updateValues={updateValues} deleteImage={deleteImage} />);
  }
}

export { ImagesList };
