import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminIndex } from "./pages/AdminIndex.jsx";
import "./index.css";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/admin/properties">
            <h3>Change to AdminsProperties</h3>
          </Route>
          <Route path="/admin/messages/:id">
            <AdminMessages />
          </Route>
          <Route path="/admin">
            <AdminIndex />
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
