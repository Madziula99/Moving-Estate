import React from "react";
import { GoogleLogin } from 'react-google-login';

class SignIn extends React.Component {

  responseGoogle = (response) => {
    console.log(response);
  }
  render() {
    return <div>
      
      <GoogleLogin
    clientId={this.props.google_client_id}
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  }
}

export { SignIn };
