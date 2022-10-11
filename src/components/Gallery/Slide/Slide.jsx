import React from "react";
import styles from "./Slide.module.css";

class Slide extends React.Component {
  addThumbClassName() {
    let classes = [];

    if (this.props.isMainSlide) {
      classes.push(styles.main_image);
    } else {
      classes.push(styles.thumb_image);

      if (this.props.focused) classes.push(styles.thumb_image_current);
    }

    return classes.join(" ");
  }

  render() {
    return <img className={this.addThumbClassName()} onClick={this.props.handleSlideClick} src={this.props.image} alt="" />
  }
}

export default Slide;
