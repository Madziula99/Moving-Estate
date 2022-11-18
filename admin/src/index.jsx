import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Messages from "./pages/Messages.jsx";
import { Index } from "./pages/Index.jsx";
import { Properties } from "./pages/Properties.jsx";
import { Agents } from "./pages/Agents.jsx";
import { Agent } from "./components/Agent/Agent.jsx";
import "./index.css";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route path="/messages/:id">
            <Messages />
          </Route>
          <Route path="/agents/:id">
            <Agent name="Adam Smith" email="adam@gmail.com" location="California" id={1} photo="https://picsum.photos/id/600/300" />
          </Route>
          <Route path="/agents">
            <Agents />
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
