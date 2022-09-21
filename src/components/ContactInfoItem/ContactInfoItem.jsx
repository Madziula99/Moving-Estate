import React from "react";
import styles from './ContactInfoItem.module.css';

class ContactInfoItem extends React.Component {
  render() {
    const type = this.props.type;
    let prefix = null;
    type !== "address" && (prefix = (type === "email" ? "mailto:" : "tel:"))
    return <div className={styles.contact_info_item}>
      <div className={styles.icon}>
        <img src={require(`./${type}.svg`)} alt="" />
      </div>
      <a className={styles.contact_link} href={prefix && prefix + this.props.children}>
        {this.props.children}
      </a>
    </div>
  }
}

export default ContactInfoItem;