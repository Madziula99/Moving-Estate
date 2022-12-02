import React from "react";
import { Formik, /*FieldArray,*/ Field } from "formik";
import { StyledInput } from "../StyledInput/StyledInput.jsx";
import { Dropdown } from "../Dropdown/Dropdown.jsx";
//import { PropertyAmenities } from "../PropertyAmenities/PropertyAmenities.jsx";
import { Menu } from "../Menu/Menu.jsx";
import styles from "./PropertyForm.module.css";

class PropertyForm extends React.Component {

  render() {
    const { values, handleSubmit, handleCancel, state } = this.props;
    const isDisabled = state === "submitting";

    return <Formik
      initialValues = { values }
      validate = {values => {
        const errors = {};

        if (!values.title) {
          errors.title = "Required field";
        }

        if (!values.locationCity) {
          errors.locationCity = "Required field, put city";
        }

        if (!values.locationState) {
          errors.locationState = "Required field, put state";
        }

        if (!values.type) {
          errors.type = "Required field, choose type";
        }

        if (!values.mode) {
          errors.mode = "Required field, choose mode";
        }

        if (!values.price) {
          errors.price = "Please, put the price of the object";
        }

        if (!values.bedrooms) {
          errors.bedrooms = "Please, put the number of bedrooms";
        }

        if (!values.bathrooms) {
          errors.bathrooms = "Please, put the number of bathrooms";
        }

        values.features.length > 0 && values.features.map(feature => {
          if (!feature.feature) {
            return errors.features = "Please, choose feature";
          }

          if (!feature.title) {
            return errors.features = "Please, add title";
          }

          return null;
        })


        return errors;
      }}

      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        console.log(values, "values");
        const property = {
          title: values.title,
          location: values.locationCity + ", " + values.locationState,
          images: values.images,
          description: values.description,
          type: values.type,
          mode: values.mode,
          price: values.price,
          area: values.area,
          bedrooms: values.bedrooms,
          bathrooms: values.bathrooms,
          amenities: values.amenities,
          features: values.features,
          floor_plans: values.floor_plans
        }
        console.log(property, "property")

        handleSubmit(values);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit} className={styles.form}>
          <Menu onCancelClick={handleCancel} isDisabled={isDisabled} />
            <StyledInput isDisabled={isDisabled} label="Title: " type="text" name="title" data={props} />
              <div className={styles.row}>
                <label htmlFor={"description"}> Description: </label>
                <Field as="textarea" className={styles.textarea} isDisabled={isDisabled} type="text" name="description" data={props} />
              </div>
              <StyledInput isDisabled={isDisabled} label="Location city: " type="text" name="locationCity" data={props} />
              <StyledInput isDisabled={isDisabled} label="Location state: " type="text" name="locationState" data={props} />
              <Dropdown isDisabled={isDisabled} label="Type" name="type" types={["apartment", "house"]} />
              <div className={styles.row}>
                {props.errors["type"] && <span className={styles.dropdown_error}>{props.errors["type"]}</span>}
              </div>
              <Dropdown isDisabled={isDisabled} label="Mode" name="mode" types={["rent", "sale"]} />
              <div className={styles.row}>
                {props.errors["mode"] && <span className={styles.dropdown_error}>{props.errors["mode"]}</span>}
              </div>
              <StyledInput isDisabled={isDisabled} label="Price: " type="number" name="price" data={props} />
              <StyledInput isDisabled={isDisabled} label="Area: " type="number" name="area" data={props} />
              <StyledInput isDisabled={isDisabled} label="Bedrooms: " type="number" name="bedrooms" data={props} />
              <StyledInput isDisabled={isDisabled} label="Bathrooms: " type="number" name="bathrooms" data={props} />
        </form>
        )}
    </Formik>
  }
}

export { PropertyForm };
