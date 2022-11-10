import React from "react";
import { SignIn } from "../components/SignIn/SignIn.jsx";
import { Redirect } from "react-router-dom";

class AdminIndex extends React.Component {
  constructor(props) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
    this.state = {
      isLoggedIn: false
    }
  }

  checkAuth() {
    const baseURL = "/api/auth/login/";
    
    fetch(baseURL + "protected").then(async res => {
      if (res.status === 401) {
        this.setState({isLoggedIn: false})
      } else {
        this.setState({isLoggedIn: true})
        const {user} = await res.json();
        document.cookie = `user_email=${user._json.email}`
      }
    })
  }

  componentDidMount() {
    this.checkAuth();
  }
  
  render() {
    if (this.state.isLoggedIn) return <Redirect to="/properties" />
    return <SignIn google_client_id={this.props.google_client_id} />
  }
}

export { AdminIndex };
