import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactInfoItem from "../components/ContactInfoItem/ContactInfoItem.jsx";
import PropertyInfo from "../components/PropertyInfo/PropertyInfo.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import ViewModeToggle from "../components/ViewModeToggle/ViewModeToggle.jsx";
import Title from "../components/Title/Title.jsx";
import AgentInfo from "../components/Agentinfo/AgentInfo.jsx";
import FloorPlans from "../components/FloorPlans/FloorPlans.jsx";
import agentImg from "../components/Agentinfo/img.png";
import PropertyCard from "../components/PropertyCard/PropertyCard.jsx";
import PropertyList from "../components/PropertyList/PropertyList.jsx";

class ComponentGallery extends React.Component {
  render() {
    const property = {
      title: "Dream Apartment for Young Family",
      location: ["Pasadena", "California"],
      image: "https://i.picsum.photos/id/323/300/300.jpg?hmac=x5Uyo5A2WJUbsbAXSto7yT2T3WBX2rfCrDk_7dY8kzU",
      description: "Lorem ipsum...",
      type: "apartment",
      mode: "sale",
      price: 100500,
      area: 1320,
      bedrooms: 2,
      bathrooms: 2
    }

    return (
      <>
        <h2>&lt;Header&gt;</h2>
        <Header>PROPERTIES</Header>

        <h2>&lt;Subtitle&gt;</h2>
        <Subtitle>Subtitle Component</Subtitle>

        <h2>&lt;Description&gt;</h2>
        <Description>Description demo component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus expedita iusto molestias provident repudiandae tempore? Commodi corporis delectus dicta dolorem eius enim iure maiores molestias, rem sed voluptates!</Description>

        <h2>&lt;ContactInfoItem&gt;</h2>
        <ContactInfoItem type="phone" isFooter={false}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={false}>info@example.com</ContactInfoItem>
        <ContactInfoItem type="address" isFooter={true}>24th Street, New York, USA</ContactInfoItem>
        <ContactInfoItem type="phone" isFooter={true}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={true}>info@example.com</ContactInfoItem>

        <h2>&lt;Footer&gt;</h2>
        <Footer />

        <h2>&lt;Property Info&gt;</h2>
        <PropertyInfo
          type="townhouse"
          area={1932}
          beds={4}
          baths={3}
          isCentered={false}
          id="A003N"
        />

        <h2>&lt;Pagination&gt;</h2>
        <Pagination pages={7} page={3} onChange={page => console.log(`Page changed to ${page}`)} />

        <h2>&lt;ViewModeToggle&gt;</h2>
        <ViewModeToggle mode="grid" onChange={mode => console.log(`View mode changed to ${mode}`)} />
        <ViewModeToggle mode="list" onChange={mode => console.log(`View mode changed to ${mode}`)} />

        <h2>&lt;Title&gt;</h2>
        <Title
          name="Verona at Parkbridge II by DR Horton"
          location={['Natomas', 'Sacramento']}
          type="townhouse"
          area={1932}
          bedrooms={4}
          bathrooms={3}
          id="A003N" />

        <h2>&lt;AgentInfo&gt;</h2>
        <AgentInfo
          name="Adam Conover"
          location="Los Angeles, California"
          email="adam@example.com"
          phone="+0 123-456-7890"
          photo={agentImg}
        />

        <h2>&lt;Property Card&gt;</h2>
        <PropertyCard
          title="Dream Apartment for Young Family"
          location={["Pasadena", "California"]}
          image={agentImg}
          description="Lorem ipsum..."
          type="townhouse"
          mode="sale"
          viewMode="grid"
          price="100 500"
          area={1320}
          bedrooms={2}
          bathrooms={2} />

        <h2>&lt;PropertyList&gt;</h2>
        <PropertyList
          defaultView="grid"
          properties={[
            {...property, id: 'A001'}, {...property, id: 'A002'}, {...property, id: 'A003'},
            {...property, id: 'A004'}, {...property, id: 'A005'}, {...property, id: 'A006'},
            {...property, id: 'A007'}, {...property, id: 'A008'}, {...property, id: 'A009'},
            {...property, id: 'A010'}, {...property, id: 'A011'}, {...property, id: 'A012'},
            {...property, id: 'A013'}, {...property, id: 'A014'}, {...property, id: 'A015'},
            {...property, id: 'A016'}, {...property, id: 'A017'}, {...property, id: 'A018'},
            {...property, id: 'A019'}, {...property, id: 'A020'}, {...property, id: 'A021'}
          ]}
        />

        <h2>&lt;FloorPlans&gt;</h2>
        <FloorPlans plans={[
          { name: "Ground Floor", url: "https://www.purelocations.com.au/wp-content/uploads/2022/05/Analise-Mornington_87201.jpg?v=1653962316" },
          { name: "1st Floor", url: "https://wpmedia.roomsketcher.com/content/uploads/2022/01/06145219/Floor-plan-with-dimensions.jpg" },
          { name: "2nd Floor", url: "https://i.stack.imgur.com/qDhl7.jpg" }
        ]}
        />

      </>
    )
  }
}

export default ComponentGallery;
