import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
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
    })
  };

  optionsObject(allProperties) {
    const extract = (key) => [
      ...new Set(allProperties.map((property => property[key])))
    ];

    const area = extract("area") || [];
    const price = extract("price").map(str => Number(str.replaceAll(" ", ""))) || [];

    const options = {
      type: extract("type") || [],
      minArea: area || [],
      maxArea: area || [],
      status: extract("mode") || [],
      bedrooms: extract("bedrooms") || [],
      bathrooms: extract("bathrooms") || [],
      location: [...new Set(allProperties.map((property => property["location"][1])))] || [],
      minPrice: price,
      maxPrice: price
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
      /* zero values in "bedrooms" and "bathrooms" props mean "3+" value from PropertyFilter dropdowns
      in order not to use strings as values and leave them as numbers */
      if (key === "bathrooms" || key === "bedrooms") return filterValue === 0 ? value >= 3 : value === filterValue;
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
    const { allProperties } = this.state;

    return <Page title="PROPERTIES" hasSidebar>
      <Sidebar onSubmitHandler={(filters) => this.filterProperties(filters)} />
      <PropertyList
        defaultView="grid"
        properties={allProperties}
      />
    </Page>
  }
}

export default withRouter(Index);
