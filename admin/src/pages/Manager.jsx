import React from "react";
import { Redirect } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { Spinner } from "../components/Spinner/Spinner.jsx";

class Manager extends React.Component {
  state = {
    redirect: null,
    isLoading: true
  }

  isManager() {
    this.setState({
      isLoading: true
    })
    fetch("/api/auth/manager")
    .then(r => {
      if (r.status === 401) {
        this.setState({
          isLoading: false,
          redirect: "/"
        });
        return null;
      }
    })
  }

  componentDidMount() {
    this.isManager();
  }

  render() {
    const { isLoading, redirect } = this.state;

    if (isLoading) return <Spinner />;

    if (redirect) return <Redirect to={redirect} />

    return <>
      <MenuButton text="To agents" href={`/admin/agents`} />
      <MenuButton text="To properties" href={`/admin/properties`} />
    </>
  }
}

export { Manager }
