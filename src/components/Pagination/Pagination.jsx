import React from "react";
import Button from "../Button/Button.jsx";
import styles from "./Pagination.module.css";

class Pagination extends React.Component {
  render() {
    const active = this.props.page;
    const pages = this.props.pages;
    const start = Math.max(1, Math.min(active - 1, active - 2));
    const end = Math.min(pages, Math.max(active + 1, active + 2));

    const buttons = [];
    for (let i = start; i <= end; i++) {
      const props = { type: "page" };
      i === start && (props.roundedLeft = true)
      i === end && (props.roundedRight = true)
      i === active && (props.isFocused = true)
      buttons.push(
        <Button
          {...props}
          onClick={() => this.props.onChange(i)}
          key={i}
        >{i}
        </Button>);
    }

    return (
      <div className={styles.wrapper}>
        {
          active !== 1 &&
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => this.props.onChange(this.props.page-1)}
          >
            &lt;
          </Button>
        }
        <div className={styles.pages}>
          {buttons}
        </div>
        {
          active !== pages &&
          <Button
            type="page"
            roundedLeft
            roundedRight
            onClick={() => this.props.onChange(this.props.page+1)}
          >
            &gt;
          </Button>
        }
      </div>
    )
  }
}

export default Pagination;