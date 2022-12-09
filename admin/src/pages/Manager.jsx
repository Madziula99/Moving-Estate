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
    .then(res => res.json() )
    .then(body => {
      if (body.manager) this.setState({ isLoading: false });
      else this.setState({ isLoading: false, redirect: "/admin" });
    })
    .catch(error => error)
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
