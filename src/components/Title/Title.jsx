import React from "react";
import PropertyInfo from "../PropertyInfo/PropertyInfo.jsx";
import styles from "./Title.module.css";

class Title extends React.Component {
  render() {
    return <>
      <h2 className={styles.apartment_title}>{this.props.name}</h2>
      <span className={styles.apartment_city_area}>{this.props.location.join(", ")}</span>
      <PropertyInfo
        type={this.props.type}
        area={this.props.area}
        beds={this.props.bedrooms}
        baths={this.props.bathrooms}
        isCentered={false}
        id={this.props.id}
      />
    </>
  }
}

export default Title;
