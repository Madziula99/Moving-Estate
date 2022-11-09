import React from "react";
import { withRouter } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn.jsx";

class AdminIndex extends React.Component {
  render() {
    
    return <>
      <h3>There will all Agent Sign-in Page</h3>
      <SignIn google_client_id={"57265931498-h67mi7nrf8po0uhabnom895c6kliii4m.apps.googleusercontent.com"} />
    </>
  }
}

export default withRouter(AdminIndex);
