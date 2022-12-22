import React from "react";

export default class BasePage extends React.Component {
  deleteAction({ message, url, successRedirect, failureRedirect }) {
    let confirm = message ? window.confirm(message) : true;

    if (confirm) {
      this.setState({ isLoading: true });

      fetch(url, { method: "DELETE" })
        .then(() => { if (successRedirect) this.setState({ redirect: successRedirect }) })
        .catch(() => { if (failureRedirect) this.setState({ redirect: failureRedirect }) })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  createAction({ url, values, successObject, redirect }) {
    this.setState({ isLoading: true });

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(body => { if (successObject) this.setState({ redirect: `${redirect}/${body[successObject].id}` }) })
      .catch(() => { if (redirect) this.setState({ redirect: redirect }) })
      .finally(() => this.setState({ isLoading: false }));
  }
}
