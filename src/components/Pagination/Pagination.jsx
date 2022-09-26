import React from "react";
import Button from "../Button/Button.jsx";
import styles from "./Pagination.module.css";

class Pagination extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.page !== 1 && this.switchPageButton('prev')}
        <div className={styles.pages}>
          {this.pageButtons()}
        </div>
        {this.props.page !== this.props.pages && this.switchPageButton('next')}
      </div>
    )
  }

  switchPageButton(direction) {
    const props = {roundedLeft: true, roundedRight: true};
    switch(direction) {
      case 'prev': return (
        <Button type="page"
          {...props}
          onClick={() => this.props.onChange(this.props.page - 1)}
        >
          &lt;
        </Button>
      );
      case 'next': return (
        <Button type="page"
          {...props}
          onClick={() => this.props.onChange(this.props.page + 1)}
        >
          &gt;
        </Button>
      );
      default: return null;
    }
  }

  pageButtons() {
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
        >
          {i}
        </Button>);
    }
    return buttons;
  }
}

export default Pagination;