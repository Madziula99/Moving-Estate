import React from "react";
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { Button } from "@mui/material";
import CreateImageForm from "../components/CreateImageForm/CreateImageForm.jsx";
import EditImageForm from "../components/EditImageForm/EditImageForm.jsx";
import ImagesItem from "../components/ImagesItem/ImagesItem.jsx";

class Images extends React.Component {
  state = {
    propertyId: this.props.match.params.id,
  };

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

    return <>
      {images.map(image => <ImagesItem image={image} key={image.link} />)}
      <NavLink to="/properties/images/new" style={{ "textDecoration": "none" }}>
        <Button variant="contained">Add image</Button>
      </NavLink>

      <Switch>
        <Route exact path="/properties/images/new" component={CreateImageForm}></Route>
        <Route path="/properties/images/:imageId/edit" component={EditImageForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Images);
