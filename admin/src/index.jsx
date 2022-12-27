import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messages from "./pages/Messages.jsx";
import { Index } from "./pages/Index.jsx";
import { Properties } from "./pages/Properties.jsx";
import { Agents } from "./pages/Agents.jsx";
import Agent from "./pages/Agent.jsx";
import { CreateAgent } from "./pages/CreateAgent.jsx";
import EditAgent from "./pages/EditAgent.jsx";
import Property from "./pages/Property.jsx";
import { Manager } from "./pages/Manager.jsx";
import Context from "./Context/Context.js";
import { SignIn } from "./pages/SignIn.jsx";
import "./index.css";

class App extends React.Component {
  render() {
    const { currentUser } = this.props;

    const Page = (!currentUser)
      ? <SignIn />
      : <Switch>
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

    Context.currentUser = this.props.currentUser;

    return (
      <React.StrictMode>
        <BrowserRouter basename="/admin">
          {Page}
        </BrowserRouter>
      </React.StrictMode>
    )
  };
}

async function main() {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  const currentUser = await fetch("/api/auth/current_user")
    .then(res => res.json())
    .then(data => { return { email: data.user.emails[0].value, isManager: data.manager } })
    .catch(() => console.log("User is not logged in"));

  root.render(<App currentUser={currentUser} />);
}

main();
