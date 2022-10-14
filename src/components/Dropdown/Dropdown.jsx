import React from "react";
import Select from 'react-select';
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  state = {
    selectedOption: this.props.value || undefined,
  }

  handleChange = (selectedOption) => {
    selectedOption === null ? this.setState({ selectedOption: undefined }) : this.setState({ selectedOption });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedOption !== this.props.selectedOption) this.updatePropsState()
    console.log(this.props.state, this.state)
  }

 updatePropsState() {
    this.setState({
      selectedOption: this.props.selectedOption
    })
  }

  className() {
    const classes = [styles.select];
    this.props.width === "half" && classes.push(styles.select_half);
    return classes.join(" ");
  }

  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: '2px solid #df434a',
        color: state.isSelected ? '#484848' : 'black',
        backgroundColor: state.isSelected ? '#df434a' : '#F0F0F0',
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#D8D8D8"
        }
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: "#F5F5F5",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#D8D8D8"
        }
      })
    };

    const { options,  placeholder, value} = this.props;

    return (
      <Select onChange={this.handleChange} options={options} styles={customStyles}
        className={this.className()} placeholder={placeholder} isClearable />
    );
  }
}

export { Dropdown };
