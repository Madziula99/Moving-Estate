import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Messages from "../../pages/Messages.jsx";
import { Index } from "../../pages/Index.jsx";
import { Properties } from "../../pages/Properties.jsx";
import { Agents } from "../../pages/Agents.jsx";
import Agent from "../../pages/Agent.jsx";
import { CreateAgent } from "../../pages/CreateAgent.jsx";
import EditAgent from "../../pages/EditAgent.jsx";
import Property from "../../pages/Property.jsx";
import { Manager } from "../../pages/Manager.jsx";
import { SignIn } from "../../pages/SignIn.jsx";

class Routing extends React.Component {
  render() {
    const { currentUser } = this.props;

    if (!currentUser) return <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>;

    return <Switch>
      <Route path="/properties/new">
        <Properties />
      </Route>
      <Route path="/properties/:id">
        <Property />
      </Route>
      <Route path="/properties">
        <Properties />
      </Route>
      <Route path="/messages/:id">
        <Messages />
      </Route>
      <Route path="/agents/:id/edit">
        <EditAgent />
      </Route>
      <Route path="/agents/new">
        <CreateAgent />
      </Route>
      <Route path="/agents/:id">
        <Agent />
      </Route>
      <Route path="/agents">
        <Agents />
      </Route>
      <Route path="/manager">
        <Manager />
      </Route>
      <Route>
        <Index path="/index" />
      </Route>
    </Switch>;
  }
}

export { Routing };
