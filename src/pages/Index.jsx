import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import properties from "../data.json";

const necessaryProperties = properties.map(property => {
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
});

class Index extends React.Component {
  createOptionsObject() {
    const options = {
      type: [],
      minArea: 0,
      maxArea: 0,
      status: [],
      bedrooms: [],
      bathrooms: [],
      location: [],
      minPrice: 0,
      maxPrice: 0,
      minYearBuilt: 0,
    };

    const types = [...new Set(necessaryProperties.map((property => property.type)))];
    const area = [...new Set(necessaryProperties.map((property => property.area)))];
    const statuses = [...new Set(necessaryProperties.map((property => property.mode)))];
    const bedrooms = [...new Set(necessaryProperties.map((property => property.bedrooms)))];
    const bathrooms = [...new Set(necessaryProperties.map((property => property.bathrooms)))];
    const locations = [...new Set(necessaryProperties.map((property => property.location[1])))];
    // TODO: price data view: 100 000 or 100000?
    const price = [...new Set(necessaryProperties.map((property => property.price.split(" ").join(""))))];
    options.type = types;
    options.minArea = Math.min(...area);
    options.maxArea = Math.max(...area);
    options.status = statuses;
    options.bedrooms = bedrooms;
    options.bathrooms = bathrooms;
    options.location = locations;
    options.minPrice = Math.min(...price.map(Number));
    options.maxPrice = Math.max(...price.map(Number));
  }

  render() {
    return <Page title="PROPERTIES" hasSidebar>
      <Sidebar />
      <PropertyList
        defaultView="grid"
        properties={necessaryProperties}
      />
    </Page>
  }
}

export default withRouter(Index);
