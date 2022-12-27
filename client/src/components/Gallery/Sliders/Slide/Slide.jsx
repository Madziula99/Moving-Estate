import React from "react";
import styles from "./Slide.module.css";

class Slide extends React.Component {
  className() {
    const classes = [];
    const { isMainSlide, isFocused } = this.props;

    if (isMainSlide) {
      classes.push(styles.main_image);
    } else {
      classes.push(styles.thumb_image);

      if (isFocused) classes.push(styles.thumb_image_current);
    }

    return classes.join(" ");
  }

  render() {
    const { image, handleSlideClick } = this.props;

    return <img className={this.className()} onClick={handleSlideClick} src={image.link} onError={({ currentTarget }) => currentTarget.src="image_not_available.png"} alt="" />
  }
}

export { Slide };
