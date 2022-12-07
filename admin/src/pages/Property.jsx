import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import styles from "./Property.module.css";

class Property extends React.Component {
  state = {
    property: {},
    propertyId: this.props.match.params.id,
    isLoading: true,
    isLoggedIn: false,
    redirect: null
  };

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
          bathrooms: body.bathrooms
        },
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

  render() {
    const { isLoading, property, propertyId, redirect, isLoggedIn } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    if (!isLoggedIn) return <Redirect to="/" />

    return <div className={styles.property_form_wrapper}>
      <div>
        <div className={styles.row}>
          <h2>Property page: {propertyId}</h2>
          <MenuButton text="..." href={`/admin/properties/${propertyId}/edit`} />
          <MenuButton text="To messages" href={`/admin/messages/${propertyId}`} />
          <MenuButton text="To properties" href={`/admin/properties`} />
        </div>
        {Object.keys(property).map(el => <dl key={el}>
            <dt>{`${el.toUpperCase()}:`}</dt>
            <dd>{property[el]}</dd>
          </dl>)
        }
      </div>

    </div>
  }
}

export default withRouter(Property);
