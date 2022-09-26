import React from "react";
import { ReactComponent as ApartmentIcon } from "./apartment.svg";
import { ReactComponent as TownhouseIcon } from "./townhouse.svg";
import { ReactComponent as AreaIcon } from "./area.svg";
import { ReactComponent as BedsIcon } from "./beds.svg";
import { ReactComponent as BathsIcon } from "./baths.svg";
import styles from "./PropertyInfo.module.css";

class PropertyInfo extends React.Component {
  generateTypeIcon() {
    switch (this.props.type) {
      case "apartment": return ApartmentIcon;
      case "townhouse": return TownhouseIcon;
      default: return null;
    }
  }

  showIcon(icon) {
    switch (icon) {
      case AreaIcon: return <AreaIcon />;
      case BedsIcon: return <BedsIcon />;
      case BathsIcon: return <BathsIcon />;
      case ApartmentIcon: return <ApartmentIcon />;
      case TownhouseIcon: return <TownhouseIcon />;
      default: return null;
    }
  }

  addClassName() {
    const classes = [`${styles.list}`];
    
    if (this.props.style === "centered") { classes.push(`${styles.centered}`); }

    return classes.join(" ");
  }


  render() {
    const availableProps = [];

    if (this.props.type) availableProps.push({ prop: this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1), icon: this.generateTypeIcon() });
    if (this.props.area) availableProps.push({ prop: `${this.props.area}ft²`, icon: AreaIcon });
    if (this.props.beds) availableProps.push({ prop: this.props.beds, icon: BedsIcon });
    if (this.props.baths) availableProps.push({ prop: this.props.baths, icon: BathsIcon });

    return <ul className={this.addClassName()}>
      {availableProps.map((item, i) => {
        return <li key={i} className={styles.list_item}>
          {this.showIcon(item.icon)}
          <span>{item.prop}</span>
        </li>
      })}
    </ul>
  }
}

export default PropertyInfo;
