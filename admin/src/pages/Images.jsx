import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import CreateImageForm from "./CreateImageForm.jsx";
import EditImageForm from "./EditImageForm.jsx";
import { NavLinkWrapper } from "../components/NavLinkWrapper/NavLinkWrapper.jsx";
import { ImagesList } from "../components/ImagesList/ImagesList.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Images extends React.Component {
  constructor(props) {
    super(props);

    this.deleteImage = this.deleteImage.bind(this);
    this.updateValues = this.updateValues.bind(this);

    this.state = {
      propertyId: this.props.match.params.id,
      isLoading: true,
      images: []
    };
  }

  getImages() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}`)
      .then(res => {
        if (res.status === 404) throw new Error();
        return res.json();
      })
      .then(data => {
        this.setState({
          images: data.images,
          isLoading: false,
        })
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  deleteImage(imageId) {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const { propertyId } = this.state;

      fetch(`/api/properties/${propertyId}/images/${imageId}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      }).then(r => {
        this.updateValues();

        return r.json();
      });
    }
  }

  componentDidMount() {
    this.getImages();
  }

  updateValues() {
    this.getImages();
  }

  render() {
    const { propertyId, images, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    return <>
      <ImagesList images={images} deleteImage={this.deleteImage} updateValues={this.updateValues} />
      <NavLinkWrapper propertyId={propertyId} text="Add Image" type="images" updateValues={this.updateValues} />

      <Switch>
        <Route exact path="/properties/:id/images/new" component={CreateImageForm}></Route>
        <Route path="/properties/:propertyId/images/:imageId/edit" component={EditImageForm}></Route>
      </Switch>
    </>
  }
}

export default withRouter(Images);
