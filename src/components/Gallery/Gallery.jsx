import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import { Slide } from "./Slide/Slide.jsx";
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

  changeImage(currentImageIndex) {
    if (this.state.currentImage === currentImageIndex) return;

    this.setState({
      currentImage: currentImageIndex
    });
  }

  componentDidUpdate(_, prevState) {
    const { images } = this.props;
    const { currentImage } = this.state;

    if (prevState.currentImage === currentImage) return;

    const translateMainValue = 1000 * currentImage;
    let translateThumbsValue = 0;
    const styledTransition = "all .5s ease-out";
    const thumbWidth = 250;

    if (currentImage >= images.length - 2) {
      translateThumbsValue = thumbWidth * (images.length - 4);
    } else if (currentImage > 0) {
      if (prevState.currentImage > currentImage) {
        translateThumbsValue = thumbWidth * currentImage - thumbWidth * 2;
      } else {
        translateThumbsValue = thumbWidth * currentImage - thumbWidth;
      }
    }

    this.mainSliderRef.current.style.transform = `translateX(-${translateMainValue}px)`;
    this.mainSliderRef.current.style.transition = styledTransition;
    this.thumbsRef.current.style.transform = `translateX(-${translateThumbsValue}px)`;
    this.thumbsRef.current.style.transition = styledTransition;
  }

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;

    return <div className={styles.wrapper}>
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <div className={styles.main_slider_wrapper}>
        {currentImage !== 0 &&
        <button
          onClick={() => this.changeImage(currentImage - 1)}
          className={`${styles.arrow} ${styles.arrow_prev}`}
        />}
        <div className={styles.main_slider} ref={this.mainSliderRef}>
          {images.map(image => <Slide image={image} key={image} isMainSlide />)}
        </div>
        {currentImage !== images.length - 1 &&
        <button
          onClick={() => this.changeImage(currentImage + 1)}
          className={`${styles.arrow} ${styles.arrow_next}`}
        />}
      </div>
      <div ref={this.thumbsRef}>
        {images.map((image, i) => {
          const isFocused = currentImage === i;

          return <Slide image={image} key={image} handleSlideClick={() => this.changeImage(i)} isFocused={isFocused} />
        })}
      </div>
    </div>
  }
}

export { Gallery };
