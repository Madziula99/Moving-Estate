import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AdminIndex } from './pages/AdminIndex.jsx';
import AdminMessages from "./pages/AdminMessages.jsx";
import './index.css';

async function main() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/properties">
            <h3>Change to AdminsProperties</h3>
          </Route>
          <Route path="/messages/:id">
            <AdminMessages />
          </Route>
          <Route>
            <AdminIndex />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}
main();
