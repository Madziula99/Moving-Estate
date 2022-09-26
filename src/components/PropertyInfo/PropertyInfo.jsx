import React from "react";
import { ReactComponent as ApartmentIcon } from './apartment.svg';
import { ReactComponent as TownhouseIcon } from './townhouse.svg';
import { ReactComponent as AreaIcon } from './area.svg';
import { ReactComponent as BedsIcon } from './beds.svg';
import { ReactComponent as BathsIcon } from './baths.svg';

class PropertyInfo extends React.Component {
  generateTypeIcon() {
    switch (this.props.type) {
      case 'apartment': return <ApartmentIcon />;
      case 'townhouse': return <TownhouseIcon />;
      default: return null;
    }
  }

  render() {
    const availableProps = [];

    if (this.props.type) availableProps.push({ prop: this.props.type, icon: this.generateTypeIcon() });
    if (this.props.area) availableProps.push({ prop: `${this.props.area}ft²`, icon: AreaIcon });
    if (this.props.beds) availableProps.push({ prop: this.props.beds, icon: BedsIcon });
    if (this.props.baths) availableProps.push({ prop: this.props.baths, icon: BathsIcon });

    return <>
    {availableProps.map((item, i) => {
      return <li key={i}>
        <img src={item.icon} alt="Icon" />
        <span>{item.prop}</span>
      </li>
    })}
    </>
  }
}

export default PropertyInfo;
