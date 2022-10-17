import React from "react";
import styles from "./Sidebar.module.css";

class Sidebar extends React.Component {
  // an exemplary object
  state = {
    filterValues: {
      type: "apartment",
      minArea: 1000,
      maxArea: 2500,
      mode: "sale",
      /* zero values in "bedrooms" and "bathrooms" props mean "3+" value from PropertyFilter dropdowns
      in order not to use strings as values and leave them as numbers */
      bedrooms: 0,
      bathrooms: 0,
      location: "California",
      minPrice: "100 000",
      maxPrice: "500 000"
    },
  }

  render() {
    return <aside className={styles.sidebar}>
      {/* an exemplary submit btn */}
      <button onClick={() => this.props.onSubmitHandler(this.state.filterValues)}></button>
    </aside>
  }
}

export { Sidebar };
