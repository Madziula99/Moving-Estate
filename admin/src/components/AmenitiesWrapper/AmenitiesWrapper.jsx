import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./AmenitiesWrapper.module.css";

class AmenitiesWrapper extends React.Component {
  render() {
    const { amenities, isChecked } = this.props;

    return <div className={styles.amenities_wrapper}>
      {amenities && amenities.map(item => {
        return <FormControlLabel
          key={item.title}
          control={<Checkbox defaultChecked={item.available} onChange={() => isChecked(item)} size="small" />}
          label={item.title}
        />
      })}
    </div>
  }
}

export { AmenitiesWrapper };
