import React from "react";
import { Redirect } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.checkAuth = this.checkAuth.bind(this);

    this.state = {
      redirect: null
    };
  }

  checkAuth() {
    fetch("/api/auth/manager")
    .then(res => res.json() )
    .then(body => {
      if (body.manager) this.setState({ redirect: "/admin/manager"});
      else this.setState({ redirect: "/admin/properties" });
    })
    .catch(error => error);
  }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    const { redirect } = this.state;

    if (redirect) return <Redirect to={redirect} />

    return <SignIn google_client_id={this.props.google_client_id} />
  }
}

export { Index };
