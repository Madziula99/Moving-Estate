import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import styles from "./Gallery.module.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
      currentThumbTranslate: 0,
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

  addThumbClassName(index) {
    const classes = [styles.thumb_image];
    
    if (this.state.currentImage === index) classes.push(styles.thumb_image_current);

    return classes.join(" ");
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentImage === this.state.currentImage) return;

    const translateMainValue = 1000 * this.state.currentImage;
    let translateThumbsValue = 0;

    if (this.state.currentImage >= this.props.images.length - 2) {
      translateThumbsValue = 250 * (this.props.images.length - 4);
    } else if (this.state.currentImage > 0) {
      translateThumbsValue = 250 * this.state.currentImage - 250;
    }

    this.mainSliderRef.current.style.transform = `translateX(-${translateMainValue}px)`;
    this.mainSliderRef.current.style.transition = "all .5s ease-out";
    this.thumbsRef.current.style.transform = `translateX(-${translateThumbsValue}px)`;
    this.thumbsRef.current.style.transition = "all .5s ease-out";
  }

  render() {
    return <div className={styles.wrapper}>
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      {this.state.currentImage !== 0 && <button
        onClick={() => this.changeThumb(this.state.currentImage - 1)}
        className={`${styles.arrow} ${styles.arrow_prev}`}
        />
      }
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
      {this.state.currentImage !== this.props.images.length - 1 && <button
        onClick={() => this.changeThumb(this.state.currentImage + 1)}
        className={`${styles.arrow} ${styles.arrow_next}`} />
      }
      <div ref={this.thumbsRef}>
        {this.props.images.map((image, i) => {
          return <img
            key={i}
            className={this.addThumbClassName(i)}
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
