import React from "react";

import styles from './Footer.module.css';

import ContactInfoItem from "../ContactInfoItem/ContactInfoItem.jsx";

import {ReactComponent as Logo} from './logo.svg';

class Footer extends React.Component {
  render() {
    return <footer>
      <div className={styles.wrapper}>
        <Logo stroke="#DF434A" className={styles.footer_logo}/>
        <div className={styles.footer_contact}>
          <span className={styles.contact_title}>Contact Info</span>
          <div className={styles.contact_info}>
            <ContactInfoItem className={styles.contact_info_item} type="address">24th Street, New York, USA</ContactInfoItem>
            <ContactInfoItem className={styles.contact_info_item} type="phone">+0 123-456-7890</ContactInfoItem>
            <ContactInfoItem className={styles.contact_info_item} type="email">info@example.com</ContactInfoItem>
          </div>
        </div>
      </div>

    </footer>
  }
}

export default Footer;
