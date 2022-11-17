import React from "react";

class Input extends React.Component {
  render() {
    const { label, name, type, data } = this.props;

    return <div>
      <span>{label}</span>
      <input
        type={type}
        onChange={data.handleChange}
        onBlur={data.handleBlur}
        value={data.values[name]}
        name={name}
      />
    </div>
  }
}

export { Input };
