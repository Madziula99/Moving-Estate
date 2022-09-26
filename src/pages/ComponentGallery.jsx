import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
        {/* prettier-ignore */}

        <Header>PROPERTIES</Header>

        {/* prettier-ignore */}

        <Subtitle>Subtitle Component</Subtitle>

        <Description>Description demo component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus expedita iusto molestias provident repudiandae tempore? Commodi corporis delectus dicta dolorem eius enim iure maiores molestias, rem sed voluptates!</Description>

      </>
    );
  }
}

export default ComponentGallery;