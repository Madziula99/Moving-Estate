import React from "react";
import { Redirect } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.checkAuth = this.checkAuth.bind(this);

    this.state = {
      redirect: null,
      isLoading: true
    };
  }

  checkAuth() {
    this.setState({ isLoading: true });

    fetch("/api/auth/manager")
      .then(res => res.json())
      .then(body => {
        if (body.manager) this.setState({ redirect: "/manager", isLoading: false });
        else this.setState({ redirect: "/properties", isLoading: false });
      })
      .catch(() => this.setState({ isLoading: false }));
    }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    const { redirect, isLoading } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <SignIn google_client_id={this.props.google_client_id} />
  }
}

export { Index };
