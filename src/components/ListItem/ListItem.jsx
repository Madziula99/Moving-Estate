import React from "react";
import { ReactComponent as ApartmentIcon } from "./apartment.svg";
import { ReactComponent as TownhouseIcon } from "./townhouse.svg";
import { ReactComponent as AreaIcon } from "./area.svg";
import { ReactComponent as BedsIcon } from "./beds.svg";
import { ReactComponent as BathsIcon } from "./baths.svg";
import styles from "./ListItem.module.css";

class ListItem extends React.Component {
  showIcon(icon) {
    switch (icon) {
      case "area": return <AreaIcon />;
      case "beds": return <BedsIcon />;
      case "baths": return <BathsIcon />;
      case "apartment": return <ApartmentIcon />;
      case "townhouse": return <TownhouseIcon />;
      default: return null;
    }
  }

  addListItemClassName() {
    const classes = [styles.list_item];

    if (this.props.info.toString().includes("ID")) classes.push(styles.id_provided);
    if (this.props.isCentered && this.props.info.toString().includes("ID")) classes.push(styles.centered);

    return classes.join(" ");
  }

  render() {
    if (typeof this.props.info === "undefined" || this.props.info.toString().includes("undefined")) return null;

    return <li className={this.addListItemClassName()}>
      {this.showIcon(this.props.icon)}
      <span>{this.props.info}</span>
    </li>
  }
}

export default ListItem;
