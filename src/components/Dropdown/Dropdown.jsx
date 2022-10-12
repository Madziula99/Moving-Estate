import React from "react";
import Select from 'react-select';
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  state = {
    selectedOption: undefined,
  }

  handleChange = (selectedOption) => {
    selectedOption === null ? this.setState({ selectedOption: undefined }) : this.setState({ selectedOption });
  }

  className() {
    const classes = [styles.select];
    this.props.width === "half" && classes.push(styles.select_half);
    return classes.join(" ");
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedOption === this.state.selectedOption) return;

    this.props.onChange(this.state.selectedOption);
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
        backgroundColor: "#F5F5F5",
        cursor: "pointer"
      })
    };

    const { options,  placeholder} = this.props;

    return (
      <Select className={this.className()} options={options} styles={customStyles}
      onChange={this.handleChange} placeholder={placeholder} isClearable />
    );
  }
}

export { Dropdown };
