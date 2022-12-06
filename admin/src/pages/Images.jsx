import { Button } from "@mui/material";
import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import CreateImageForm from "../components/CreateImageForm/CreateImageForm.jsx";
import EditImageForm from "../components/EditImageForm/EditImageForm.jsx";

class Images extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  }

  async deleteImage(imageId) {
    if (window.confirm("Are you sure that you want to remove this image?")) {

      // const { propertyId } = this.state;

      const propertyId = "A001";

      console.log("delete", imageId)

      await fetch(`/api/properties/${propertyId}/images/${imageId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => r.json());
    }
  }
  render() {
    const { images } = this.props;
    const { propertyId } = this.state;

    // return images.map(image => <NavLink to={`/properties/${propertyId}/images/${image.imageId}`}>
    return <>
      {images.map(image => <div key={image.link}>
        <img src={image.link} style={{ width: "200px" }} alt="" />
        <NavLink to={{ pathname: `/properties/images/${image.imageId}/edit`, aboutProps: { link: image.link } }}><Button variant="contained">...</Button></NavLink>
        <Button variant="contained" onClick={() => this.deleteImage(image.imageId)}>x</Button>
      </div>
      )}
      <NavLink style={{ textDecoration: "none" }} to="/properties/images/new"><Button variant="contained">Add image</Button></NavLink>
      <Switch>
        <Route exact path="/properties/images/new" component={CreateImageForm}></Route>
        <Route path="/properties/images/:imageId/edit" component={EditImageForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Images);
