import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import styles from "./Gallery.module.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };
  }

  changeThumb(index) {
    if (this.state.currentImage === index) return;
    this.setState({
      currentImage: index
    });
  }

  render() {
    return <div className={styles.wrapper}>
      <PriceLabel
        type={this.props.type}
        mode={this.props.mode}
        price={this.props.price}
      />
      <div className={styles.main_slider}>
        {this.props.images.map((image, i) => {
          return <img
            key={i}
            className={styles.main_image}
            src={image}
            alt=""
          />
        })}
      </div>
      <div className={styles.thumbs}>
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
