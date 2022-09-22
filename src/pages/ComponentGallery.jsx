import React from "react";
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
}

export default ComponentGallery;
