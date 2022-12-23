import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import CreateImage from "./CreateImage.jsx";
import EditImage from "./EditImage.jsx";
import { NavLinkWrapper } from "../../components/NavLinkWrapper/NavLinkWrapper.jsx";
import { ImagesList } from "../../components/ImagesList/ImagesList.jsx";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import BasePage from "./BasePage.jsx";

class Images extends BasePage {
  state = {
    propertyId: this.props.match.params.id,
    isLoading: true,
    redirect: null,
    images: []
  };

  deleteImage = imageId => this.deleteAction({
    message: "Are you sure you want to delete this image?",
    url: `/api/properties/${this.state.propertyId}/images/${imageId}`,
    failureRedirect: `/properties/${this.state.propertyId}`
  })

  async getImages() {
    this.setState({ isLoading: true });

    const images = await this.fetchImages();

    this.setState({
      images: images,
      isLoading: false,
    });
  }

  async fetchImages() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(data => data.images)
      .catch(() => this.setState({ redirect: `/properties/${propertyId}`, isLoading: false }));
  }

  async componentDidUpdate() {
    const { images, isLoading } = this.state;

    if (isLoading) return;

    const updated = await this.fetchImages();

    if (JSON.stringify(images) === JSON.stringify(updated)) return;

    this.getImages();
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    const { propertyId, images, isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return <>
      <ImagesList images={images} deleteImage={this.deleteImage} />
      <NavLinkWrapper propertyId={propertyId} text="Add Image" type="images" />

      <Switch>
        <Route exact path="/properties/:id/images/new" component={CreateImage}></Route>
        <Route path="/properties/:propertyId/images/:imageId/edit" component={EditImage}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Images);
