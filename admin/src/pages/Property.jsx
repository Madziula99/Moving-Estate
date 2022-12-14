import React from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { Title } from "../components/Title/Title.jsx";
import { PropertyTabs } from "../components/PropertyTabs/PropertyTabs.jsx";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";
import EditProperty from "./EditProperty.jsx";
import Amenities from "./Amenities.jsx";
import Images from "./Images.jsx";
import FloorPlans from "./FloorPlans.jsx";
import Features from "./Features.jsx";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";

class Property extends React.Component {
  state = {
    property: {},
    propertyId: this.props.match.params.id,
    isLoading: true,
    isLoggedIn: false,
    redirect: null,
  };

  isLoggedIn() {
    this.setState({
      isLoading: true
    });

    fetch("/api/auth/current_user")
    .then(r => {
      if (r.status === 401) {
        this.setState({
          isLoading: false,
          redirect: "/"
        });
        return null;
      }
    })
  }

  getProperty() {
    const { propertyId } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/properties/${propertyId}`)
    .then(res => {
      if (res.status === 404) throw new Error();
      return res.json()
    })
    .then(body => {
      this.setState({
        property: {
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
        },
        isLoading: false,
        isLoggedIn: true
      })
    })
    .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  deleteProperty = () => {
    const { propertyId } = this.state;

    let confirm = window.confirm("Are you sure that you want delete this property?");

    if (confirm) {
      this.setState({
        isLoading: true,
      })
      fetch(`/api/properties/${propertyId}`, {
        method: "DELETE"
      })
      .then(res => {
        if (res.status === 403) throw new Error();
        this.setState({
          isLoading: false,
          redirect: "/properties",
        })
      })
    }
  }

  componentDidMount() {
    this.isLoggedIn();
    this.getProperty();
  }

  render() {
    const { isLoading, property, propertyId, redirect, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <PageWrapper>
      <Title>Property page: {propertyId}</Title>
      <MenuButton text="Edit property" href={`/admin/properties/${propertyId}/edit`} />
      <MenuButton text="Delete property" handleClick = {this.deleteProperty} />
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
