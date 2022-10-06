import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

const settingsMain = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
};

const settingsThumbs = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  focusOnSelect: true,
  centerPadding: "0",
  arrows: false,
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav1: null,
      nav2: null,
      slider1: null,
      slider2: null,
    };

    this.setMainRef = slider => (this.setState({ slider1: slider }));
    this.setCarouselRef = slider => (this.setState({ slider2: slider }));

    this.setNavs = this.setNavs.bind(this);
  }

  setNavs() {
    this.setState({
      nav1: this.state.slider1,
      nav2: this.state.slider2
    });
  }

  render() {
    const { nav1, nav2 } = this.state;

    return <div className="wrapper">
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={this.setMainRef}
        beforeChange={this.setNavs}
      >
        {this.props.images.map((image) => {
          return <img src={image} alt="Gallery main slide" className="main-slide" key={image} />
        })}
      </Slider>
      <Slider
        {...settingsThumbs}
        asNavFor={nav1}
        ref={this.setCarouselRef}
      >
        {this.props.images.map((image) => {
          return <img src={image} alt="Gallery carousel slide" className="carousel-slide" key={image} />
        })}
      </Slider>
    </div>
  }
}

export default Gallery;
