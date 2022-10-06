import React from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: this.props.options[0],
    };
    this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this);
  }

  addClasses() {
    const classes = [styles.select];
    this.props.width === "half" && classes.push(styles.select_half);
    return classes.join(" ");
  }

  onOptionChangeHandler (event)  {
    console.log("User Selected Value - ", event.target.value)
  }

  render() {
    return (
      <select name={this.props.name} id={this.props.id} className={this.addClasses()} onChange={this.onOptionChangeHandler}>
        {this.props.options.map((option, index) => {
          return <option key={index} >
            {option}
          </option>
        })}
      </select>
    );
  }
}

export { Dropdown };
