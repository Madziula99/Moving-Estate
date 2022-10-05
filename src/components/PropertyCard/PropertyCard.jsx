import React from "react";
import PriceLabel from "../PriceLabel/PriceLabel.jsx";
import PropertyInfo from "../PropertyInfo/PropertyInfo.jsx";
import styles from "./PropertyCard.module.css";

class PropertyCard extends React.Component {
  addCardClassName() {
    const classes = [styles.property_card];
    
    if (this.props.viewMode === "grid") classes.push(styles.grid_view);
    if (this.props.viewMode === "list") classes.push(styles.list_view);

    return classes.join(" ");
  }

  addWrapperClassName() {
    return this.props.viewMode === "grid"
      ? styles.grid_view_wrapper
      : styles.list_view_wrapper;
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
          price={this.props.price}
        />
        <img className={styles.property_card_image} src={this.props.image} alt="Accommodation" />
        <div className={this.addWrapperClassName()}>
          <h3 className={styles.property_card_name}>{this.props.title}</h3>
          <span>{this.props.location.join(", ")}</span>
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
