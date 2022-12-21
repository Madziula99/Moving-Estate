import React from "react";

export default class BasePage extends React.Component {
  deleteAction({ message, url, successRedirect, failureRedirect }) {
    let confirm = window.confirm(message);

  if (confirm) {
    this.setState({ isLoading: true });

    fetch(url, { method: "DELETE" })
      .then(() => { if (successRedirect) this.setState({ redirect: successRedirect }) })
      .catch(() => { if (failureRedirect) this.setState({ redirect: failureRedirect }) })
      .finally(() => this.setState({ isLoading: false }));
  }
  }
}
