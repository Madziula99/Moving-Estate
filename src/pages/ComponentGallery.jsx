import React from "react";
import Header from "../components/Header/Header.jsx";
import Subtitle from "../components/Subtitle/Subtitle.jsx";
import Button from "../components/Button/Button.jsx";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';
import Pagination from "../components/Pagination/Pagination.jsx";

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
