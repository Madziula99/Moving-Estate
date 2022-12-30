import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal.jsx";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import BasePage from "../BasePage.jsx";
import { Button } from "@mui/material";

class DeleteFeature extends BasePage {
  state = {
    redirect: null,
    propertyId: this.props.match.params.propertyId,
    icon: this.props.match.params.icon,
    isLoading: false,
  };

  deleteFeature = () =>
    this.deleteAction({
      url: `/api/properties/${this.state.propertyId}/features/${this.state.icon}`,
      successRedirect: `/properties/${this.state.propertyId}/features`,
      failureRedirect: `/properties/${this.state.propertyId}/features`,
    });

  returnToPropertyPage = () => {
    this.setState({
      redirect: `/properties/${this.state.propertyId}/features`,
    });
  };

  render() {
    const { redirect, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return (
      <Modal title={"Are you sure you want to delete this feature?"}>
        <Button
          sx={{ m: 1, p: 1 }}
          variant="contained"
          onClick={this.deleteFeature}
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

export default withRouter(DeleteFeature);
