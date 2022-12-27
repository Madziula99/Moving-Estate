import React from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { PropertyTabs } from "../components/PropertyTabs/PropertyTabs.jsx";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";
import EditProperty from "./EditProperty.jsx";
import Amenities from "./Amenities.jsx";
import Images from "./Images.jsx";
import FloorPlans from "./FloorPlans.jsx";
import Features from "./Features.jsx";
import BasePage from "./BasePage.jsx";

class Property extends BasePage {
  state = {
    property: {},
    propertyId: this.props.match.params.id,
    isLoading: true,
    redirect: null,
  };

  async fetchProperty() {
    const { propertyId } = this.state;

    return await fetch(`/api/properties/${propertyId}`)
      .then(res => res.json())
      .then(body => {
        return {
          title: body.title,
          description: body.description,
          location: body.location[0] + ", " + body.location[1],
          type: body.type,
          mode: body.mode,
          price: body.price,
          area: body.area,
          bedrooms: body.bedrooms,
          bathrooms: body.bathrooms,
        }
      })
      .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  async getProperty() {
    this.setState({ isLoading: true });

    const property = await this.fetchProperty();

    this.setState({
      property: property,
      isLoading: false
    });
  }

  deleteProperty = () => this.deleteAction({
    message: "Are you sure you want to delete this property?",
    url: `/api/properties/${this.state.propertyId}`,
    successRedirect: "/properties",
    failureRedirect: "/properties"
  })

  componentDidMount() {
    this.getProperty();
  }

  async componentDidUpdate() {
    const { property, isLoading } = this.state;

    if (isLoading) return;

    const updated = await this.fetchProperty();

    if (JSON.stringify(property) === JSON.stringify(updated)) return;

    this.getProperty();
  }

  render() {
    const { isLoading, property, propertyId, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />;

    return <PageWrapper>
      <SignOut headerMessage={`Property page: ${propertyId}`} />
      <MenuButton text="Edit property" href={`/admin/properties/${propertyId}/edit`} />
      <MenuButton text="Delete property" handleClick={this.deleteProperty} />
      <MenuButton text="To messages" href={`/admin/messages/${propertyId}`} />
      <MenuButton text="To properties" href={`/admin/properties`} />
      {Object.keys(property).map(el => <dl key={el}>
          <dt>{`${el.toUpperCase()}:`}</dt>
          <dd>{property[el]}</dd>
        </dl>)
      }
      <PropertyTabs propertyId={propertyId} />

      <Switch>
        <Route path="/properties/:id/edit" component={EditProperty}></Route>
        <Route path="/properties/:id/amenities"><Amenities /></Route>
        <Route path="/properties/:id/images"><Images /></Route>
        <Route path="/properties/:id/floor_plans"><FloorPlans /></Route>
        <Route path="/properties/:id/features"><Features /></Route>
      </Switch>
    </PageWrapper>
  }
}

export default withRouter(Property);
