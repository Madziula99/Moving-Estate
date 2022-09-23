import React from "react";
import Button from "../components/Button/Button.jsx";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';
import Pagination from "../components/Pagination/Pagination.jsx";

class ComponentGallery extends React.Component {
  render() {
    return (
      <>
        <h2>&lt;Button&gt;</h2>
        <div style={{margin: "1rem"}}>
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => console.log(`Page change: Previous page`)}
          >
            &lt;
          </Button>
          <br />
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => console.log(`Page change: Next page`)}
          >
            &gt;
          </Button>
          <br />
          <Button
            type="page"
            roundedLeft
            isFocused
            onClick={() => console.log(`Page change: Page 1`)}
          >
            1
          </Button>
          <br />
          <Button
            type="page"
            onClick={() => console.log(`Page change: Page 2`)}
          >
            2
          </Button>
          <br />
          <Button
            type="page"
            roundedRight
            onClick={() => console.log(`Page change: Page 3`)}
          >
            3
          </Button>
          <br />
          <Button
            type="view_mode"
            roundedLeft
            isFocused
            onClick={() => console.log(`Toggle view: Grid Mode`)}
          >
            <GridModeIcon />
          </Button>
          <br />
          <Button
            type="view_mode"
            roundedRight
            onClick={() => console.log(`Toggle view: List Mode`)}
          >
            <ListModeIcon />
          </Button>
        </div>


        <h2>&lt;Pagination&gt;</h2>
        <Pagination pages={7} page={1} onChange={page => console.log(`Page changed to ${page}`)} />
        <Pagination pages={7} page={3} onChange={page => console.log(`Page changed to ${page}`)} />
        <Pagination pages={7} page={7} onChange={page => console.log(`Page changed to ${page}`)} />
      </>
    )
  }
}

export default ComponentGallery;
