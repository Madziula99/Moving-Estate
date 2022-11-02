import React from "react";
import { withRouter } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn";
import './IndexAgent.css';

class IndexAgent extends React.Component {
  render() {
    return <>
      <h3>There will all Agent Sign-in Page</h3>
      <SignIn />
    </>
  }
}

export default withRouter(IndexAgent);
