import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Gallery.css";

class Gallery extends React.Component {
  render() {
    return <div className="wrapper">
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <Carousel
        transitionTime="500"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
      {this.props.images.map((image) => {
        return <img src={image} alt="Gallery slide" key={image} />
      })}
      </Carousel>
    </div>
  }
}

export default Gallery;
