import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";
import { PropertyMessages } from "../components/PropertyMessages/PropertyMessages.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import { Context } from "../Context/Context.js";
import { MenuButton } from "../controls/MenuButton/MenuButton.jsx";

class Messages extends React.Component {
  state = {
    propertyMessages: [],
    isLoading: true,
    hasAccess: false,
  };

  getPropertyMessages() {
    const id = this.props.match.params.id;

    this.setState({ isLoading: true });

    const email = this.context.email;

    fetch(`/api/properties/messages/${id}?email=${email}`).then((res) => {
      if (res.status === 401) {
        return this.setState({ isLoading: false });
      } else
        return res.json().then((messages) => {
          this.setState({
            propertyMessages: messages,
            isLoading: false,
            hasAccess: true,
          });
        });
    });
  }

  componentDidMount() {
    this.getPropertyMessages();
  }

  render() {
    const { propertyMessages, isLoading, hasAccess } = this.state;
    const propertyId = this.props.match.params.id;

    if (isLoading) return <Spinner />;

    if (hasAccess)
      return (
        <PageWrapper message={`Messages regarding property ${propertyId}`}>
          <MenuButton text="To properties" href={`/admin/properties`} />
          <PropertyMessages propertyMessages={propertyMessages} />
        </PageWrapper>
      );

    return <Redirect to="/properties" />;
  }
}

Messages.contextType = Context;

export default withRouter(Messages);
