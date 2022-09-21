import React from "react";
import "./Subtitle.css";

class Subtitle extends React.Component {
    render() {
        return (
            <div className="subtitle-component">
                <div className="subtitle-section__name">{this.props.children}</div>
                <div className="subtitle-section__underline"></div>
            </div>
        )
    }
}

export default Subtitle;
