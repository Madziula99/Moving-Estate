import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Title from "../components/Title/Title.jsx";
import Description from "../components/Description/Description.jsx";
import FloorPlans from "../components/FloorPlans/FloorPlans";
import Amenities from "../components/Amenities-Amenity/Amenities.jsx";
import Features from "../components/Features/Features.jsx";
import AgentInfo from "../components/Agentinfo/AgentInfo.jsx";
import Footer from "../components/Footer/Footer";
import properties from "../data.json";
import Gallery from "../components/Gallery/Gallery.jsx";

class Property extends Component {
  render() {
    const property = properties.find(property => property.id === this.props.match.params.property_id);
    if (property === undefined) return <Redirect to="/" />
    return <>
      <Header>{property.title}</Header>
      <Title
        name={property.title}
        location={property.location}
        type={property.type}
        area={property.area}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        id={property.id}
      />
      <Gallery images={property.images} />
      <Description>{property.description}</Description>
      {property.floor_plans && <FloorPlans plans={property.floor_plans} />}
      <Amenities
        items={property.amenities}
      />
      <Features
        items={property.features}
      />
      <AgentInfo {...property.agent} />
      <Footer />
    </>
  }
}

export default withRouter(Property);
