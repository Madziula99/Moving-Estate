import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Title from "../components/Title/Title.jsx";
import { Gallery } from "../components/Gallery/Gallery.jsx";
import Description from "../components/Description/Description.jsx";
import FloorPlans from "../components/FloorPlans/FloorPlans";
import Amenities from "../components/Amenities/Amenities.jsx";
import Features from "../components/Features/Features.jsx";
import { AgentInfo } from "../components/Agentinfo/AgentInfo.jsx";
import { Page } from "../components/Page/Page.jsx";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Property extends Component {
  state = {
    property: undefined,
  };

  async fetchProperty(propertyId) {
    await fetch(`/api/client/properties/${propertyId}`)
      .then((r) => r.json())
      .then((data) => this.setState({ property: data }));
  }

  componentDidMount() {
    const id = this.props.match.params.property_id;

    this.fetchProperty(id);
  }

  render() {
    const { property } = this.state;

    if (property === undefined)
      return (
        <PageWrapper>
          <Spinner />
        </PageWrapper>
      );

    return (
      <Page title={property.title}>
        <Title
          name={property.title}
          location={property.location}
          type={property.type}
          area={property.area}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          id={property.id}
        />
        <Gallery
          images={property.images}
          type={property.type}
          mode={property.mode}
          price={property.price}
        />
        <Description>{property.description}</Description>
        {property.floor_plans[0] && <FloorPlans plans={property.floor_plans} />}
        <Amenities items={property.amenities} />
        <Features items={property.features} />
        <AgentInfo {...property.agent} propertyId={property.id} />
      </Page>
    );
  }
}

export default withRouter(Property);
