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
import ComponentGallery from "./pages/ComponentGallery.jsx";
import Property from "./pages/Property.jsx";
import { Manager } from "./pages/Manager.jsx";
import ComponentGallery from "./pages/ComponentGallery.jsx";
import "./index.css";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
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
          <Route path="/gallery">
            <ComponentGallery />
          </Route>
          <Route path="/manager">
            <Manager />
          </Route>
          <Route>
            <Index google_client_id={config.google_client_id} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

main();
