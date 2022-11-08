import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminIndex from './pages/AdminIndex.jsx';
import { SignIn } from "./components/SignIn/SignIn.jsx";
import './index.css';

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/agent">
            <AdminIndex />
          </Route>
          <Route path="/">
            <SignIn google_client_id={config.google_client_id} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}
main();
