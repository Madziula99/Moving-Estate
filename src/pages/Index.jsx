import React from "react";
import { withRouter } from "react-router-dom";
import { Page } from "../components/Page/Page.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import properties from "../data.json";

class Index extends React.Component {
  render() {
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

    const extract = (key) => [
      ...new Set(necessaryProperties.map((property => property[key])))
    ];

    const area = extract("area");
    const price = extract("price").map(str => Number(str.replaceAll(" ", "")));

    const options = {
      type: extract("type"),
      minArea: area,
      maxArea: area,
      status: extract("mode"),
      bedrooms: extract("bedrooms"),
      bathrooms: extract("bathrooms"),
      location: [...new Set(necessaryProperties.map((property => property["location"][1])))],
      minPrice: price,
      maxPrice: price
    };
    //TODO: price and are maybe array with some step?? or Math.ceil to some bigger value
    console.log(options)

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
