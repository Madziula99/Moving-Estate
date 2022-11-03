import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminIndex } from './pages/AdminIndex.jsx';
import Messages from "./pages/Messages.jsx";
import { AdminsProperties } from "./pages/AdminsProperties.jsx";
import "./index.css";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/properties">
            <AdminsProperties />
          </Route>
          <Route path="/messages/:id">
            <Messages />
          </Route>
          <Route path="/admin">
            <AdminIndex google_client_id={config.google_client_id} />
          </Route>
          <Route path="/">
            <h3>Go to path="/admin"</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

main();
