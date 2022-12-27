import React from "react";
import { Redirect } from "react-router-dom";
import { MenuButton } from "../components/MenuButton/MenuButton.jsx";
import { SignOut } from "../components/SignOut/SignOut.jsx";
import { PageWrapper } from "../components/PageWrapper/PageWrapper.jsx";
import { Context } from "../Context/Context.js";

class Manager extends React.Component {
  render() {
    if (this.context.isManager) return <PageWrapper>
      <SignOut headerMessage="Welcome!" />
      <MenuButton text="To agents" href="/admin/agents" />
      <MenuButton text="To properties" href="/admin/properties" />
    </PageWrapper>

    return <Redirect to="/" />;
  }
}

Manager.contextType = Context;

export { Manager }
