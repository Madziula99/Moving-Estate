import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AgentIndex from './pages/AgentIndex.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/agent">
            <AgentIndex />
          </Route>
          <Route path="/">
            <h3>Go to path="/agent"</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
