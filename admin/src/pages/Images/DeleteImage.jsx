import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal.jsx";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import BasePage from "../BasePage.jsx";
import { Button } from "@mui/material";

class DeleteImage extends BasePage {
  state = {
    redirect: null,
    propertyId: this.props.match.params.propertyId,
    imageId: this.props.match.params.imageId,
    isLoading: false,
  };

  deleteImage = () =>
    this.deleteAction({
      url: `/api/properties/${this.state.propertyId}/images/${this.state.imageId}`,
      redirect: `/properties/${this.state.propertyId}/images`,
    });

  returnToPropertyPage = () => {
    this.setState({ redirect: `/properties/${this.state.propertyId}/images` });
  };

  render() {
    const { redirect, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return (
      <Modal title={"Are you sure you want to delete this image?"}>
        <Button
          sx={{ m: 1, p: 1 }}
          variant="contained"
          onClick={this.deleteImage}
        >
          Delete
        </Button>
        <Button
          sx={{ m: 1, p: 1 }}
          variant="contained"
          onClick={this.returnToPropertyPage}
        >
          Cancel
        </Button>
      </Modal>
    );
  }
}

export default withRouter(DeleteImage);
