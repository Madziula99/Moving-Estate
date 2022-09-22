import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Description from "../components/Description/Description";
import Button from "../components/Button/Button.jsx";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';
import Pagination from "../components/Pagination/Pagination.jsx";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
                <h2>&lt;Button&gt;</h2>
                <div style={{display: "flex"}}>
                    <Button type="page" position="standalone" onChange={() => console.log(`Page changed to 3`)}>&lt;</Button>
                    <div style={{margin: "0 1rem"}}>
                        {pages}
                    </div>
                    <Button type="page" position="standalone" onChange={() => console.log(`Page changed to 3`)}>&gt;</Button>
                </div>
                <hr />
                <Button type="view_mode" position="left" onChange={() => console.log(`Toggle view`)}>
                    <GridModeIcon />
                </Button>
                <Button type="view_mode" position="right" onChange={() => console.log(`Toggle view`)}>
                    <ListModeIcon />
                </Button>

        <Header>PROPERTIES</Header>

        {/* prettier-ignore */}

        <Subtitle>Subtitle Component</Subtitle>

        <Description>Description demo component. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque delectus expedita iusto molestias provident repudiandae tempore? Commodi corporis delectus dicta dolorem eius enim iure maiores molestias, rem sed voluptates!</Description>

      </>
    );
  }
}

export default ComponentGallery;
