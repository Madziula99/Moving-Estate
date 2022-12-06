import React from "react";
import { Formik, FieldArray, Field } from "formik";
import { Button } from "@mui/material";
import { StyledInput } from "../StyledInput/StyledInput.jsx";
import styles from "./FeaturesForm.module.css";
import Feature from "./Feature/Feature.jsx";

class FeaturesForm extends React.Component {

  state = {
    isDisabled: false
  };

  disable() {
    this.setState({ isDisabled: true });
  }

  render() {
    const { text, href, type, handleClick } = this.props;
    const { values } = this.props;
    const { isDisabled } = this.state;
    const features = this.props.features;

    return <>
      <Formik
      initialValues={values}
      onSubmit={() => {}}
    >
      {props => (
        <FieldArray name="features">
          {({ _, remove, push }) => (
            <div className={styles.features_wrapper}>
              {props.values.features.map((feature, i) => {
                return (
                  <div key={i} className={styles.row}>
                  <Feature icon={feature.icon } />
                    <p className={styles.value_text}>{feature.description}</p>
                    <div className={styles.row_btns_wrapper}>
                      <Button variant="contained" onClick={() => this.openModal({ name: `features.${i}.link` })} className={styles.row_btn} disabled={isDisabled}>...</Button>
                      <Button variant="contained" onClick={() => {remove(i)}} className={styles.row_btn} disabled={isDisabled}>x</Button>
                    </div>
                  </div>
                );
              })}
              <Button variant="contained" onClick={() => push("")} disabled={isDisabled}>Add feature</Button>
            </div>
          )}
        </FieldArray>


        // <form onSubmit={props.handleSubmit} className={styles.form}>
        //   <div className={styles.row}>
        //     <Feature key={"paw"} icon="paw" />
        //     <p>Feature description</p>
        //     <Button variant="contained" onClick={() => {}} style={{ margin: "2% 5%" }} disabled={isDisabled}>Edit</Button>
        //     <Button variant="contained" onClick={() => {}} style={{ margin: "2% 5%" }} disabled={isDisabled}>X</Button>
        //   </div>
        //   <Button variant="contained" onClick={() => {}} style={{ margin: "2% 5%" }} disabled={isDisabled}>Add</Button>
        // </form>
      )}
    </Formik>
  </>
  }
}

export { FeaturesForm };
