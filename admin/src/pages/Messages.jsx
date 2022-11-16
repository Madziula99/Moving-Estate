import React from "react";
import { withRouter } from "react-router-dom";
import { PropertyMessages } from "../components/PropertyMessages/PropertyMessages.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyMessages: [],
      isLoggedIn: false,
      isLoading: false,
    }
  }

  async getPropertyMessages() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.id;

    const email = await fetch("/api/auth/current_user")
      .then(r => {
        if (r.status === 401) {
          this.setState({ isLoading: false });
          return null;
        } else {
          return r.json().then(({ user }) => user.emails[0].value);
        }
      })

    if (email) {
      await fetch(`/api/properties/messages/${id}?email=${email}`)
        .then(res => {
          console.log(res)
          if (res.status === 401) {
            this.setState({ isLoading: false });
            return null;
          } else return res.json().then(messages => {
            this.setState({
              propertyMessages: messages,
              isLoggedIn: true,
              isLoading: false
            })
          });
        })
    }
  }

  componentDidMount() {
    this.getPropertyMessages();
  }

  render() {
    const { propertyMessages, isLoading } = this.state;
    const propertyId = this.props.match.params.id;

    if (isLoading) return <Spinner />

    return <>
      <SignOut headerMessage={`Messages regarding property: ${propertyId}`} />
      <PropertyMessages propertyMessages={propertyMessages} />
    </>
  }
}

export default withRouter(Messages);
