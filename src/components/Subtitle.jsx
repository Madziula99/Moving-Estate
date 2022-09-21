import React from "react";
import styles from "./Subtitle.module.css";

class Subtitle extends React.Component {
    render() {
        return (
            <div className={styles.subtitle_component}>
                <div className={styles.subtitle_section_name}>{this.props.children}</div>
                <div className={styles.subtitle_section_underline}></div>
            </div>
        )
    }
}

export default Subtitle;
