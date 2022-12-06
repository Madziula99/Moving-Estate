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
import "./index.css";
import Images from "./pages/Images.jsx";

async function main() {
  const config = await fetch("/api/config").then(res => res.json());
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/admin">
        <Switch>
          <Route path="/properties/images">
            <Images
              images={[
                {
                  "imageId": 1,
                  "link": "https://preview.redd.it/s9edy9i5mbp41.jpg?auto=webp&s=232205a320f206393fbd55fe283564a6ccd95253"
                },
                {
                  "imageId": 2,
                  "link": "http://apartmentsalesmelbourne.com.au/wp-content/uploads/2017/08/1311_60-Siddley-St_036.jpg"
                },
                {
                  "imageId": 3,
                  "link": "https://www.souciehorner.com/wp-content/uploads/2017/04/Kitchen3-1536.jpg"
                },
                {
                  "imageId": 4,
                  "link": "http://montrosesquareapartments.com/blog/wp-content/uploads/2019/10/apartment-tour-checklist.jpeg"
                }
              ]}
            />
          </Route>
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
          <Route>
            <Index google_client_id={config.google_client_id} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

main();
