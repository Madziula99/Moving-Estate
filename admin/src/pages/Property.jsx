import React from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { Title } from "../components/Title/Title.jsx";
import EditProperty from "../components/EditProperty/EditProperty.jsx";
import { PropertyTabs } from "../components/PropertyTabs/PropertyTabs.jsx";
import Amenities from "./Amenities.jsx";
import Images from "./Images.jsx";
import FloorPlans from "./FloorPlans.jsx";

class Property extends React.Component {
  constructor(props) {
    super(props);

    this.updateValues = this.updateValues.bind(this);

    this.state = {
      property: {},
      propertyId: this.props.match.params.id,
      isLoading: true,
      isLoggedIn: false,
      redirect: null,
      amenities: [],
    };
  }

  isLoggedIn() {
    this.setState({
      isLoading: true
    })
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
        amenities: body.amenities,
        isLoading: false,
        isLoggedIn: true
      })
    })
    .catch(() => this.setState({ redirect: "/properties", isLoading: false }));
  }

  componentDidMount() {
    this.isLoggedIn();
    this.getProperty();
  }

  updateValues() {
    this.getProperty();
  }

  render() {
    const { isLoading, property, propertyId, redirect, isLoggedIn, amenities } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <div style={{margin:"0 auto", width:"1000px"}}>
      <Title>Property page: {propertyId}</Title>
      <MenuButton text="..." href={`/admin/properties/${propertyId}/edit`} />
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
        <Route path="/properties/:id/amenities">
          <Amenities amenities={amenities} updateValues={this.updateValues} />
        </Route>
        <Route path="/properties/:id/images"><Images /></Route>
        <Route path="/properties/:id/floor_plans"><FloorPlans /></Route>
      </Switch>
    </div>
  }
}

export default withRouter(Property);
