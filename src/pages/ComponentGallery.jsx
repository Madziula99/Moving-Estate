import React from "react";
import Button from "../components/Button/Button.jsx";
import {ReactComponent as ListModeIcon} from './listMode.svg';
import {ReactComponent as GridModeIcon} from './gridMode.svg';

class ComponentGallery extends React.Component {
    render() {
        const num = 5;
        const pages = [];
        for (let i = 1; i <= num; i++) {
            const position = ( (i === 1) && "left" ) || ( (i === num) && "right" );
            pages.push(<Button type="page" position={position} id={i} key={i}>{i}</Button>);
        }
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

            </>
        )
    }
}

export default ComponentGallery;
