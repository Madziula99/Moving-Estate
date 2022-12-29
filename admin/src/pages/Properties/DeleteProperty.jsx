import React from "react";
import { Redirect } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner.jsx";
import { Modal } from "../../components/Modal/Modal.jsx";
import BasePage from "../BasePage.jsx";
import { Button } from "@mui/material";

class DeleteProperty extends BasePage {
  state = {
    redirect: null,
    isLoading: true,
    propertyId: this.props.match.params.id,
  };

  async getProperty() {
    const { propertyId } = this.state;

    await fetch(`/api/properties/${propertyId}`)
      .then((res) => res.json())
      .then((body) => {
        const property = {
          id: body.id,
          title: body.title,
          description: body.description,
          locationCity: body.location[0],
          locationState: body.location[1],
          type: body.type,
          mode: body.mode,
          price: body.price,
          area: body.area,
          bedrooms: body.bedrooms,
          bathrooms: body.bathrooms,
        };

        this.setState({
          property: property,
          isLoading: false,
        });
      })
      .catch(() =>
        this.setState({ redirect: "/properties", isLoading: false })
      );
  }

  deleteProperty = () =>
    this.deleteAction({
      url: `/api/properties/${this.state.propertyId}`,
      successRedirect: "/properties",
      failureRedirect: "/properties",
    });

  componentDidMount() {
    this.getProperty();
  }

  returnToPropertyPage = () => {
    this.setState({ redirect: `/properties/${this.state.propertyId}` });
  };

  render() {
    const { redirect, property, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return (
      <Modal title={`Remove this property: ${property.id}?`}>
        <Button
          sx={{ m: 1, p: 1 }}
          variant="contained"
          onClick={this.deleteProperty}
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

export { DeleteProperty };
