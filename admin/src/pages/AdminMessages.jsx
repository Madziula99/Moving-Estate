import React from "react";
import { withRouter } from "react-router-dom";
import { AdminPropertyMessages } from "../components/AdminPropertyMessages/AdminPropertyMessages.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class AdminMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propertyMessages: [],
      isLoading: false,
    }
  }

  async getPropertyMessages() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.id;

    await fetch(`/api/properties/messages/${id}`)
      .then(res => res.json())
      .then(messages => {
        this.setState({
          propertyMessages: messages,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    this.getPropertyMessages();
  }

  render() {
    const { propertyMessages, isLoading } = this.state;
    if (isLoading) return <Spinner />
    return <AdminPropertyMessages
      propertyId={this.props.match.params.id}
      propertyMessages={propertyMessages}
    />
  }
}

export default withRouter(AdminMessages);
