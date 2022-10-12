import React from "react";
import Select from 'react-select';
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  addClasses() {
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
        backgroundColor: state.isSelected ? '#df434a' : '#D3D3D3',
        cursor: "pointer"
      }),
      control: (provided) => ({
        ...provided,
        marginTop: "5%",
      })
    };

    const { options,  placeholder} = this.props;

    return (
      <Select className={this.addClasses()} options={options} styles={customStyles}
      onChange={this.handleChange} autoFocus={true} placeholder={placeholder} isClearable />
    );
  }
}

export { Dropdown };
