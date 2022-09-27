import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import PropertyInfo from "../PropertyInfo/PropertyInfo.jsx";
import CardImage from "./default-card-image.svg";
import styles from "./PropertyCard.module.css";

class PropertyCard extends React.Component {
  addCardClassName() {
    const classes = [styles.property_card];
    
    if (this.props.viewMode === "grid") classes.push(styles.grid_view);
    if (this.props.viewMode === "table") classes.push(styles.table_view);

    return classes.join(" ");
  }

  addWrapperClassName() {
    return this.props.viewMode === "grid"
      ? styles.grid_view_wrapper
      : styles.table_view_wrapper;
  }

  checkIsGridView() {
    return this.props.viewMode === "grid";
  }

  render() {
    return (
      <div className={this.addCardClassName()}>
        <PriceLabel
          type={this.props.type}
          mode={this.props.mode}
          price={this.props.price.toLocaleString().split(",").join(" ")}
        />
        <img className={styles.property_card_image} src={CardImage} alt="" />
        <div className={this.addWrapperClassName()}>
          <h3>{this.props.title}</h3>
          <a href="#" target="_blank">{this.props.location.join(", ")}</a>
          <p>{this.props.description}</p>
          <PropertyInfo
            area={1932}
            beds={4}
            baths={3}
            isCentered={this.checkIsGridView()}
          />
        </div>
      </div>
    )
  }
}

export default PropertyCard;
