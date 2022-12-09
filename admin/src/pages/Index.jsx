import React from "react";
import { Redirect } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.checkAuth = this.checkAuth.bind(this);

    this.state = {
      isLoggedIn: false
    };
  }

  checkAuth() {
    const baseURL = "/api/auth/current_user";

    fetch(baseURL).then(async res => {
      if (res.status === 401) {
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true });
        // if email===managerEmail {...abut redirect}
      }
    });
  }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    if (this.state.isLoggedIn) return <Redirect to="/properties" />
    return <SignIn google_client_id={this.props.google_client_id} />
  }
}

export { Index };
