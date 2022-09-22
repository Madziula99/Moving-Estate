import React from "react";
import styles from './Footer.module.css';
import ContactInfoItem from "../ContactInfoItem/ContactInfoItem.jsx";
<<<<<<< HEAD
import Logo from "../Logo/Logo.jsx";
=======
import {ReactComponent as Logo} from './logo.svg';
>>>>>>> 96469be (Change css styles for Footer and ContactInfoItem)

class Footer extends React.Component {
  render() {
    return <footer>
      <div className={styles.wrapper}>
<<<<<<< HEAD
        <Logo isFooter={true} />
=======
        <Logo className={styles.footer_logo}/>
>>>>>>> 96469be (Change css styles for Footer and ContactInfoItem)
        <div className={styles.footer_contact}>
          Contact Info
          <div className={styles.contact_info}>
            <ContactInfoItem type="address" isFooter={true}>24th Street, New York, USA</ContactInfoItem>
            <ContactInfoItem type="phone" isFooter={true}>+0 123-456-7890</ContactInfoItem>
            <ContactInfoItem type="email" isFooter={true}>info@example.com</ContactInfoItem>
          </div>
        </div>
      </div>
    </footer>
  }
}

export default Footer;
