import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";
import properties from "../data.json";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";

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
    })

    return <>
      <Header>PROPERTIES</Header>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Sidebar />
        <PropertyList
          defaultView="grid"
          properties={necessaryProperties}
        />
      </div>
      <Footer />
    </>
  }
}

export default withRouter(Index);
