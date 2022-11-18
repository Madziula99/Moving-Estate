import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    const { label, name, type, data } = this.props;

    return <div className={styles.input_container}>
      <div className={styles.input_wrapper}>
        <span>{label}</span>
        <input
          type={type}
          onChange={data.handleChange}
          onBlur={data.handleBlur}
          value={data.values[name]}
          name={name}
          className={styles.input}
        />
      </div>
      {data.errors[name] && <span className={styles.input_error}>{data.errors[name]}</span>}
    </div>
  }
}

export { Input };
