import React from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      value: "default"
    };
    this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this);
  }

  addClasses() {
    const classes = [styles.select];
    this.props.width === "half" && classes.push(styles.select_half);
    return classes.join(" ");
  }

  onOptionChangeHandler (event)  {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <select className={this.addClasses()} onChange={this.onOptionChangeHandler} value={this.state.value}>
        <option value="default" disabled hidden>{this.props.placeholder}</option>
        {this.props.options.map((option, index) => {
          return <option key={option.value} >
            {option.value}
          </option>
        })}
      </select>
    );
  }
}

export { Dropdown };
