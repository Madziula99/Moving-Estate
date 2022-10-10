import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import styles from "./Gallery.module.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      isMouseDown: false,
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

  scrollThumbs(e) {
    e.preventDefault();

    const translateValue = Math.max(Math.min(e.clientX - this.thumbsRef.current.offsetLeft, 250 * (this.props.images.length - 4)), 0);

    this.thumbsRef.current.style.transform = `translateX(-${translateValue}px)`;
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentImage === this.state.currentImage) return;

    const translateValue = 1000 * this.state.currentImage;

    this.mainSliderRef.current.style.transform = `translateX(-${translateValue}px)`;
  }

  render() {
    return <div className={styles.wrapper}>
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <div className={styles.main_slider} ref={this.mainSliderRef}>
        {this.props.images.map((image, i) => {
          return <img
            key={i}
            className={styles.main_image}
            src={image}
            alt=""
          />
        })}
      </div>
      <div
        className={styles.thumbs}
        ref={this.thumbsRef}
        onMouseDown={() => this.setState({ isMouseDown: true })}
        onMouseUp={() => this.setState({ isMouseDown: false })}
        onMouseMove={(e) => this.state.isMouseDown && this.scrollThumbs(e)}
        onMouseLeave={() => this.setState({ isMouseDown: false })}
      >
        {this.props.images.map((image, i) => {
          return <img
            key={i}
            className={styles.thumb_image}
            src={image}
            alt=""
            onClick={() => this.changeThumb(i)}
          />
        })}
      </div>
    </div>
  }
}

export default Gallery;
