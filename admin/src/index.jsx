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
import "./index.css";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));

  async function isLoggedIn() {
    // this.setState({ isLoading: true });

    return fetch("/api/auth/current_user")
      .then(res => res.json())
      .then(({ user }) => user.emails[0].value)
      .catch(() => {
        console.log("CATCH");
        // this.setState({ isLoading: false, redirect: "/" });
      });
  };

  Context.isLoggedIn = () => isLoggedIn();

  root.render(
    <React.StrictMode>
      <Context.Provider value={Context.isLoggedIn}>
        <BrowserRouter basename="/admin">
          <Switch>
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
              <Index google_client_id={config.google_client_id} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </React.StrictMode>
  );
}

main();
