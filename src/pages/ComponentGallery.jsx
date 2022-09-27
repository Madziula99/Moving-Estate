import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactInfoItem from "../components/ContactInfoItem/ContactInfoItem.jsx";
import PropertyInfo from "../components/PropertyInfo/PropertyInfo.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";

class ComponentGallery extends React.Component {
  render() {
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
      </>
    )
  }
}

export default ComponentGallery;
