import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { PropertyMessages } from "../components/PropertyMessages/PropertyMessages.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import Context from "../Context/Context.js";

class Messages extends React.Component {
  state = {
    propertyMessages: [],
    isLoading: true,
    hasAccess: false,
  }

  getPropertyMessages() {
    const id = this.props.match.params.id;

    this.setState({ isLoading: true });

    const email = Context.currentUser.email;

    fetch(`/api/properties/messages/${id}?email=${email}`)
      .then(res => {
        if (res.status === 401) {
          return this.setState({ isLoading: false });
        } else return res.json().then(messages => {
          this.setState({
            propertyMessages: messages,
            isLoading: false,
            hasAccess: true
          });
        });
      })
  }

  componentDidMount() {
    this.getPropertyMessages();
  }

  render() {
    const { propertyMessages, isLoading, hasAccess } = this.state;
    const propertyId = this.props.match.params.id;

    if (isLoading) return <Spinner />

    if (hasAccess) return <>
      <SignOut headerMessage={`Messages regarding property: ${propertyId}`} />
      <PropertyMessages propertyMessages={propertyMessages} />
    </>

    return <Redirect to="/properties" />
  }
}

export default withRouter(Messages);
