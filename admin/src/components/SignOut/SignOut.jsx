import React from "react";
import { Button } from '@mui/material';
import styles from "./SignOut.module.css";

class SignOut extends React.Component {
  render() {
    return <div className={styles.header}>
      <h2>{this.props.agentName}, welcome!</h2>
      <Button variant="contained" onClick={this.props.signOut}>Sign Out</Button>
    </div>
  }
}

export { SignOut };
