import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexAgent from './pages/IndexAgent';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/agent">
            <IndexAgent />
          </Route>
          <Route path="/">
            <h3>Go to path="/agent"</h3>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
