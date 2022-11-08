import React from "react";

class SignIn extends React.Component {

  render() {
    return <div>
      <div id="g_id_onload"
        data-client_id="778039279925-l3o03a49ocrdm5lsl80ue5c5hhgs2bo6.apps.googleusercontent.com"
        data-login_uri="https://127.0.0.1"
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
