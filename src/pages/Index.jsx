import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PropertyList from "../components/PropertyList/PropertyList";
import properties from "../data.json";

class Index extends React.Component {
  render() {
    const newArr = properties.map(property => {
      return {
        id:property.id,
        title: property.title,
        location: property.location,
        image: property.images[0],
        description: property.description,
        type: property.type,
        mode: property.mode,
        price: property.price,
        area: property.area,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
      }
    })    

    return <>
      <Header>PROPERTIES</Header>
      <PropertyList
        defaultView="grid"
        properties={newArr}
      />
      <Footer />
    </>
  }
}

export default withRouter(Index);
