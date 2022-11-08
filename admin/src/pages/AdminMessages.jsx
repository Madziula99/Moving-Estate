import React from "react";
import { withRouter } from "react-router-dom";
import { AdminPropertyMessages } from "../components/AdminPropertyMessages/AdminPropertyMessages.jsx";

class AdminMessages extends React.Component {
  render() {
    return <>
      <h3>This is all messages, which you receive from this Property id</h3>
      <AdminPropertyMessages />
    </>
  }
}

export default withRouter(AdminMessages);