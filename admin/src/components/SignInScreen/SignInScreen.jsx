import React from "react";
import { Button } from "@mui/material";
import styles from "./SignInScreen.module.css";

class SignInScreen extends React.Component {
  render() {
    return <div id={styles.sign_in_screen}>
      <Button variant="contained" href="/api/auth/login/google" className={styles.sign_in_button}>Sign In</Button>
    </div>
  }
}

export { SignInScreen };
