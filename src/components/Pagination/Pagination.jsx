import React from "react";
import Button from "../Button/Button.jsx";

class Pagination extends React.Component {
  render() {
    const active = this.props.page;
    const pages = this.props.pages;
    const start = Math.max(1, Math.min(active - 1, active - 2));
    const end = Math.min(pages, Math.max(active + 1, active + 2));

    const buttons = [];
    for (let i = start; i <= end; i++) {
      const position =
        ( (i === start) && "left" ) ||
        ( (i === end) && "right" );
      const selected = (( i === active ) && "selected") || null;
      buttons.push(<Button type="page" position={position} selected={selected} key={i}>{i}</Button>);
    }

    return (
      <div style={{display: "flex"}}>
        { active !== 1 && <Button type="page" position="standalone" onChange={() => this.props.onChange(this.props.page-1)}>&lt;</Button> }
        <div style={{margin: "0 1rem"}}>
          {buttons}
        </div>
        { active !== pages && <Button type="page" position="standalone" onChange={() => this.props.onChange(this.props.page+1)}>&gt;</Button> }
      </div>
    )
  }
}

export default Pagination;