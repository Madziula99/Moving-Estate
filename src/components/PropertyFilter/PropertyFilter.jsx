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
    const { options, values } = this.props;
    return <form className={styles.property_filter} onSubmit={event => {
        event.preventDefault();
        this.props.onSubmit(this.sendFilterParams());
      }}>
      <Subtitle>PROPERTY SEARCH</Subtitle>

      <Input
        placeholder="Property title, Property Content, Exerpt"
        type="text"
        onChange={value => this.setFilterParams("title", value)}
        value={values.title}
      />

      <Dropdown
        placeholder="Type"
        options={options.type.map(item => {
          return {
            "value": item,
            "label": item
          }
        })}
        onChange={value => this.setFilterParams("type", value)}
        value={values.title}
      />

      <Dropdown
        placeholder="Status"
        options={options.status.map(item => {
          return {
            "value": item,
            "label": item
          }
        })}
        onChange={value => this.setFilterParams("mode", value)}
        value={values.mode}
      />

      <Input
        type="number"
        placeholder="Min. Area"
        onChange={value => this.setFilterParams("minArea", value)}
        width="half"
        value={values.minArea}
      />

      <Input
        type="number"
        placeholder="Max. Area"
        onChange={value => this.setFilterParams("maxArea", value)}
        width="half"
        value={values.maxArea}
      />

      <Dropdown
        placeholder="Bedrooms"
        options={options.bedrooms.map(item => {
          return {
            "value": item,
            "label": item
          }
        })}
        width="half"
        onChange={value => this.setFilterParams("bedrooms", value)}
        value={values.bedrooms}
      />

      <Dropdown
        placeholder="Bathrooms"
        options={options.bathrooms.map(item => {
          return {
            "value": item,
            "label": item
          }
        })}
        width="half"
        onChange={value => this.setFilterParams("bathrooms", value)}
        value={values.bathrooms}
      />

      <Input
        type="number"
        placeholder="Min. Price"
        onChange={value => this.setFilterParams("minPrice", value)}
        width="half"
        value={values.minPrice}
      />

      <Input
        type="number"
        placeholder="Max. Price"
        onChange={value => this.setFilterParams("maxPrice", value)}
        width="half"
        value={values.maxPrice}
      />

      <Dropdown
        placeholder="Location"
        options={options.location.map(loc => {
          return {
            "value": loc,
            "label": loc
          }
        })}
        onChange={value => this.setFilterParams("location", value)}
      />

      <Input
        placeholder="Min. Year Built"
        type="number"
        onChange={value => this.setFilterParams("minYear", value)}
        value={values.minYear}
      />

      <Button
        type="submit"
        size="l"
        roundedLeft
        roundedRight
      >
        Search
      </Button>
    </form>
  }
}

export { PropertyFilter };
