import React from "react";
import Subtitle from "../Subtitle/Subtitle.jsx";
import { Button } from "../Button/Button.jsx"
import styles from "./PropertyFilter.module.css";
import { Input } from "../Input/Input.jsx";
import { Dropdown } from "../Dropdown/Dropdown.jsx";

class PropertyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.sendFilterParams = this.sendFilterParams.bind(this);
    this.filterParams = props.values || {};
  }

  setFilterParams(type, value) {
    this.filterParams[type] = value;
  }

  sendFilterParams() {
    const sendingParams = {}
    for (let key in this.filterParams) {
      if (this.filterParams[key]) sendingParams[key] = this.filterParams[key]
    }
    return sendingParams;
  }

  render() {
    return <form className={styles.property_filter} onSubmit={event => {
      event.preventDefault();
      this.props.onSubmit(this.sendFilterParams());
    }}>
      <Subtitle>PROPERTY SEARCH</Subtitle>

      <Input placeholder="Property title, Property Content, Exerpt" type="text"
             onChange={value => this.setFilterParams("title", value)} value={this.props.values.title} />

      <Dropdown placeholder="Type" options={[
      { "value": "single-v", "label": "Single-family-l" },
      { "value": "house-v", "label": "Townhouse-l" },
      { "value": "apt-v", "label": "Apartment-l" },
        ]} onChange={value => this.setFilterParams("type", value)} />

      <Dropdown placeholder="Status" options={[
      { "value": "single-v", "label": "Status 1" },
      { "value": "house-v", "label": "Status 2" },
      { "value": "apt-v", "label": "Status 3" },
        ]} onChange={value => this.setFilterParams("status", value)} />

      <Input type="number" placeholder="Min. Area" onChange={value => this.setFilterParams("minArea", value)} width="half"/>

      <Input type="number" placeholder="Max. Area" onChange={value => this.setFilterParams("maxArea", value)} width="half"/>

      <Dropdown placeholder="Bedrooms" options={[
          { "value": "cat-v", "label": "1" },
          { "value": "dog-v", "label": "2" },
          { "value": "bird-v", "label": "3+" },
        ]} width="half" onChange={value => this.setFilterParams("bedrooms", value)} />

        <Dropdown placeholder="Bathrooms" options={[
          { "value": "cat-v", "label": "1" },
          { "value": "dog-v", "label": "2" },
          { "value": "bird-v", "label": "3+" },
        ]} width="half" onChange={value => this.setFilterParams("bathrooms", value)} />

      <Input type="number" placeholder="Min. Price" onChange={value => this.setFilterParams("minPrice", value)} width="half" />

      <Input type="number" placeholder="Max. Price" onChange={value => this.setFilterParams("maxPrice", value)} width="half"/>
      
      
      <Dropdown placeholder="Location" options={[
      { "value": "single-v", "label": "New York" },
      { "value": "house-v", "label": "Los Angeles" },
      { "value": "apt-v", "label": "San Francisco" },
        ]} onChange={value => this.setFilterParams("location", value)} />

      <Input placeholder="Min. Year Built" type="number" onChange={value => this.setFilterParams("minYear", value)}
             value={this.props.values.minYear} />

      <Button type="submit" size="l" roundedLeft roundedRight>Search</Button>
    </form>
  }
}

export { PropertyFilter };
