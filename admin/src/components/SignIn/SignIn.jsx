import React from "react";
import { Button } from '@mui/material';
import styles from "./SignIn.module.css";

class SignIn extends React.Component {
  render() {
    return <div id={styles.sign_in_screen}>
      <Button variant="contained" href="/api/auth/login/google" className={styles.sign_in_button}>Sign In</Button>
    </div>
  }
}

export { SignIn };
