import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Footer from "../components/Footer/Footer.jsx";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
        {/* prettier-ignore */}

        <Header>PROPERTIES</Header>

        {/* prettier-ignore */}

        <Subtitle>Subtitle Component</Subtitle>

      </>
    );
  }
}

export default ComponentGallery;
