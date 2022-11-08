import React from "react";
import { withRouter } from "react-router-dom";
import { AdminPropertyMessages } from "../components/AdminPropertyMessages/AdminPropertyMessages.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";
import Data from "../dataMessages.json"

//TODO: create endpoint and take data from server
//TODO: went to the database and put there a process with filtering
const chooseProperty = "A001";
const filterByIdRows = Data.filter(e => e.id === chooseProperty);
const filteredMessages =filterByIdRows.map(message => {
  return {
    id: message["message-ID"],
    from: message.from.replace("Ethereal Email ", ""),
    time: message.time,
    text: message.text
    }
  });

class AdminMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredPropertyMessages: filteredMessages,
      adminProperty: chooseProperty,
      isLoading: false,
    }
  }

  /*async getPropertyMessages() {
    this.setState({ isLoading: true });

    const urlQueryParams = new URLSearchParams({ id: this.state.adminProperty }).toString();

    await fetch("/api/properties?" + urlQueryParams)
      .then(r => r.json())
      .then(({ messages, id })  => {
        this.setState({
          filteredPropertyMessages: messages,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    this.getPropertyMessages();
  }*/


  render() {
    const { filteredPropertyMessages, isLoading, adminProperty } = this.state;
    return (<section>
      {isLoading && <Spinner />}
      {!isLoading && <AdminPropertyMessages adminProperty={adminProperty} filteredPropertyMessages={filteredPropertyMessages} />}
    </section>)
  }
}

export default withRouter(AdminMessages);