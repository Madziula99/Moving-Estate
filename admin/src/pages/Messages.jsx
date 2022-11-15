import React from "react";
import { withRouter } from "react-router-dom";
import { PropertyMessages } from "../components/PropertyMessages/PropertyMessages.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Messages extends React.Component {
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
    return <PropertyMessages
      propertyId={this.props.match.params.id}
      propertyMessages={propertyMessages}
    />
  }
}

export default withRouter(Messages);