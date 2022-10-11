import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import Slide from "./Slide/Slide";
import styles from "./Gallery.module.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.mainSliderRef = React.createRef();
    this.thumbsRef = React.createRef();
  }

  changeThumb(index) {
    if (this.state.currentImage === index) return;

    this.setState({
      currentImage: index
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentImage === this.state.currentImage) return;

    const translateMainValue = 1000 * this.state.currentImage;
    let translateThumbsValue = 0;
    const styledTransition = "all .5s ease-out";

    if (this.state.currentImage >= this.props.images.length - 2) {
      translateThumbsValue = 250 * (this.props.images.length - 4);
    } else if (this.state.currentImage > 0) {
      if (prevState.currentImage > this.state.currentImage) {
        translateThumbsValue = 250 * this.state.currentImage - 500;
      } else {
        translateThumbsValue = 250 * this.state.currentImage - 250;
      }
    }

    this.mainSliderRef.current.style.transform = `translateX(-${translateMainValue}px)`;
    this.mainSliderRef.current.style.transition = styledTransition;
    this.thumbsRef.current.style.transform = `translateX(-${translateThumbsValue}px)`;
    this.thumbsRef.current.style.transition = styledTransition;
  }

  render() {
    return <div className={styles.wrapper}>
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <div className={styles.main_slider_wrapper}>
        {this.state.currentImage !== 0 &&
        <button
          onClick={() => this.changeThumb(this.state.currentImage - 1)}
          className={`${styles.arrow} ${styles.arrow_prev}`}
        />}
        <div className={styles.main_slider} ref={this.mainSliderRef}>
          {this.props.images.map(image => {
            return <Slide image={image} key={image} isMainSlide />
          })}
        </div>
        {this.state.currentImage !== this.props.images.length - 1 &&
        <button
          onClick={() => this.changeThumb(this.state.currentImage + 1)}
          className={`${styles.arrow} ${styles.arrow_next}`}
        />}
      </div>
      <div ref={this.thumbsRef}>
        {this.props.images.map((image, i) => {
          const isFocused = this.state.currentImage === i;

          return <Slide image={image} key={image} handleSlideClick={() => this.changeThumb(i)} focused={isFocused} />
        })}
      </div>
    </div>
  }
}

export default Gallery;
