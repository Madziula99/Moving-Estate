import React from "react";
import styles from './ContactInfoItem.module.css';

class ContactInfoItem extends React.Component {
  render() {
    const type = this.props.type;

    const classes = [styles.icon];
    this.props.isFooter && classes.push(styles.footer);

    let prefix = null;
    type !== "address" && (prefix = (type === "email" ? "mailto:" : "tel:"))

    return <div className={styles.contact_info_item}>
      <div className={classes.join(' ')}>
        <img src={require(`./${type}.svg`)} alt="" />
      </div>
      <a className={styles.contact_link} href={prefix && prefix + this.props.children}>
        {this.props.children}
      </a>
    </div>
  }
}

export default ContactInfoItem;