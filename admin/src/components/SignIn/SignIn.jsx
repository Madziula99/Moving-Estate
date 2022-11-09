import React from "react";

class SignIn extends React.Component {

  checkAuth = function() {
    fetch("/api/auth/login/protected").then(res => {
      if (res.status == "401") window.location = "http://localhost:3500/api/auth/login/google";
      else window.location = "http://localhost:3500/api/auth/login/google";
    })
  }
  
  render() {
    return <div>
      <div id="g_id_onload"
        data-client_id={this.props.google_client_id}
        data-login_uri="https://127.0.0.1:3000/admin/checkuser"
        data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
      </div>
    </div>
  }
}

export { SignIn };
