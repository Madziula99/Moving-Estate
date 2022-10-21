import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import ComponentGallery from "./pages/ComponentGallery.jsx";
import Property from "./pages/Property.jsx";
import Index from "./pages/Index.jsx";
import "./index.css";

async function main() {
  const api = await fetch('/api/status').then(r => r.json());
  console.log(`API is ${api.status}`);

  const { properties, options } = await fetch("/api/properties").then(r => r.json());

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/component_gallery">
            <ComponentGallery />
          </Route>
          <Route path="/:property_id">
            <Property />
          </Route>
          <Route path="/">
            <Index properties={properties} options={options}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

main();
