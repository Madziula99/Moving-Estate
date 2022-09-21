import React from "react";

import styles from './Footer.module.css';

import {ReactComponent as Logo} from './logo.svg';

class Footer extends React.Component {
  render() {
    return <footer>
      <div className={styles.wrapper}>
        <Logo stroke="#DF434A" className={styles.footer_logo}/>
        <div>
          <span className={styles.contact_title}>Contact</span>
        </div>
      </div>

    </footer>
  }
}

export default Footer;
