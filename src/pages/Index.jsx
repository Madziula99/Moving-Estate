import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { PropertyFilter } from "../components/PropertyFilter/PropertyFilter.jsx";
import properties from "../data.json";

class Index extends React.Component {
  state = {
    allProperties: properties.map(property => {
      return {
        id: property.id,
        title: property.title,
        location: property.location,
        image: property.images[0],
        description: property.description,
        type: property.type,
        mode: property.mode,
        price: property.price,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms
      }
    }),
    selectedOptions: {
      bedrooms: 2,
      bathrooms: 1
    }
  };

  optionsObject(allProperties) {
    const extract = (key) => [
      ...new Set(allProperties.map((property => property[key])))
    ];

    const options = {
      type: extract("type").sort() || [],
      status: extract("mode").sort() || [],
      bedrooms: extract("bedrooms").sort((a, b) => {return a-b}) || [],
      bathrooms: extract("bathrooms").sort((a, b) => { return a - b }) || [],
      location: [...new Set(allProperties.map((property => property["location"][1])))].sort() || []
    };

    return options;
  }

  filterProperties(filters) {
    const filterKeys = Object.keys(filters);
    const { allProperties } = this.state;

    const filteredProperties = allProperties.filter(item => filterKeys.every(key => {
      const filterValue = filters[key];
      const value = item[key];

      if (key === "type" || key === "mode") return value === filterValue;
      if (key === "bathrooms" || key === "bedrooms") return value === filterValue;
      if (key === "location") return value[1] === filterValue;
      if (key === "minArea") return item["area"] >= filterValue;
      if (key === "maxArea") return item["area"] <= filterValue;
      if (key === "minPrice") return item["price"] >= filterValue;
      if (key === "maxPrice") return item["price"] <= filterValue;
      if (key === "minYearBuilt") return item["year"] >= filterValue;

      return true;
    }));

    this.setState({
      allProperties: filteredProperties
    });
  }

  render() {
    const { allProperties, selectedOptions } = this.state;

    return <Page title="PROPERTIES" hasSidebar>
      <PropertyFilter
        values={{ ...selectedOptions }}
        options={ this.optionsObject(allProperties)}
        onSubmit={(filters) => this.filterProperties(filters)}
      />
      <PropertyList
        defaultView="grid"
        properties={allProperties}
      />
    </Page>
  }
}

export default withRouter(Index);
