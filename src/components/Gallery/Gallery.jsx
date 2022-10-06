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
  infinite: false,
};

const settingsThumbs = {
  slidesToShow: 4,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerPadding: 0,
  arrows: false,
  infinite: false,
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainNavigation: null,
      thumbsNavigation: null,
      mainSlider: null,
      thumbsSlider: null,
    };

    this.setMainRef = slider => (this.setState({ mainSlider: slider }));
    this.setCarouselRef = slider => (this.setState({ thumbsSlider: slider }));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.mainSlider !== this.state.mainSlider && prevState.thumbsSlider !== this.state.thumbsSlider) {
      this.setState({
        mainNavigation: this.state.mainSlider,
        thumbsNavigation: this.state.thumbsSlider
      });
    }
  }

  render() {
    const { mainNavigation, thumbsNavigation } = this.state;

    return <div className="wrapper">
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <Slider
        {...settingsMain}
        asNavFor={thumbsNavigation}
        ref={this.setMainRef}
      >
        {this.props.images.map((image) => {
          return <img src={image} alt="Gallery main slide" className="main-slide" key={image} />
        })}
      </Slider>
      <Slider
        {...settingsThumbs}
        asNavFor={mainNavigation}
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
