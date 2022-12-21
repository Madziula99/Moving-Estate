import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { PropertyMessages } from "../components/PropertyMessages/PropertyMessages.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import Context from "../Context/Context.js";

class Messages extends React.Component {
  state = {
    propertyMessages: [],
    isLoggedIn: false,
    isLoading: true,
    hasAccess: false
  }

  async getPropertyMessages() {
    const id = this.props.match.params.id;

    this.setState({ isLoading: true });

    const email = await Context.isLoggedIn();

    if (email === undefined) return this.setState({ isLoading: false, redirect: "/" });

    await fetch(`/api/properties/messages/${id}?email=${email}`)
      .then(res => {
        if (res.status === 401) {
          this.setState({ isLoading: false });
          return null;
        } else return res.json().then(messages => {
          this.setState({
            propertyMessages: messages,
            isLoggedIn: true,
            isLoading: false,
            hasAccess: true
          });
        });
      });
  }

  componentDidMount() {
    this.getPropertyMessages();
  }

  render() {
    const { propertyMessages, isLoading, isLoggedIn, hasAccess } = this.state;
    const propertyId = this.props.match.params.id;

    if (isLoading) return <Spinner />

    if (isLoggedIn && hasAccess) return <>
      <SignOut headerMessage={`Messages regarding property: ${propertyId}`} />
      <PropertyMessages propertyMessages={propertyMessages} />
    </>

    if (isLoggedIn) return <Redirect to="/admin/properties" />

    return <Redirect to="/" />
  }
}

export default withRouter(Messages);
