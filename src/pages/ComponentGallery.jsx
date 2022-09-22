import React from "react";
<<<<<<< HEAD
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description";
import Footer from "../components/Footer/Footer.jsx";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
        {/* prettier-ignore */}

        <Header>PROPERTIES</Header>

        {/* prettier-ignore */}

        <Subtitle>Subtitle Component</Subtitle>

        <Description>Description demo component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus expedita iusto molestias provident repudiandae tempore? Commodi corporis delectus dicta dolorem eius enim iure maiores molestias, rem sed voluptates!</Description>

        <h2>&lt;ContactInfoItem&gt;</h2>
        <ContactInfoItem type="phone" isFooter={false}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={false}>info@example.com</ContactInfoItem>
        <ContactInfoItem type="address" isFooter={true}>24th Street, New York, USA</ContactInfoItem>
        <ContactInfoItem type="phone" isFooter={true}>+0 123-456-7890</ContactInfoItem>
        <ContactInfoItem type="email" isFooter={true}>info@example.com</ContactInfoItem>

        <h2>&lt;Footer&gt;</h2>
        <Footer />

      </>
    );
  }
=======
import ContactInfoItem from "../components/ContactInfoItem/ContactInfoItem.jsx";

import Footer from "../components/Footer/Footer.jsx";

class ComponentGallery extends React.Component {
    render() {
        return (
            <>
                <h2>Footer</h2>
                <Footer />


                <h2>Contact Info Item</h2>
                <ContactInfoItem type="phone" isFooter={false}>+0 123-456-7890</ContactInfoItem>
                <ContactInfoItem type="email" isFooter={false}>info@example.com</ContactInfoItem>

            </>
        )
    }
>>>>>>> 96469be (Change css styles for Footer and ContactInfoItem)
}

export default ComponentGallery;
