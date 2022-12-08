import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import CreateImageForm from "../components/CreateImageForm/CreateImageForm.jsx";
import EditImageForm from "../components/EditImageForm/EditImageForm.jsx";
import ImagesItem from "../components/ImagesItem/ImagesItem.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";

class Images extends React.Component {
  render() {
    const { images, updateValues } = this.props;
    const propertyId = this.props.match.params.id;

    return <>
      {images.map(image => <ImagesItem image={image} key={image.link} updateValues={updateValues} />)}
      <NavLinkWrapper propertyId={propertyId} text="Add Image" updateValues={updateValues} />

      <Switch>
        <Route exact path="/properties/:id/images/new" component={CreateImageForm}></Route>
        <Route path="/properties/:propertyId/images/:imageId/edit" component={EditImageForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Images);
