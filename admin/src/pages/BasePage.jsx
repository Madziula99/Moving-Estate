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

  createAction({ url, values, successRedirect, failureRedirect }) {
    this.setState({ isLoading: true });

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(({ property }) => { if (successRedirect) this.setState({ redirect: `/properties/${property.id}` })})
      .catch(() => { if (failureRedirect) this.setState({ redirect: failureRedirect }) })
      .finally(() => this.setState({ isLoading: false }));
  }
}
