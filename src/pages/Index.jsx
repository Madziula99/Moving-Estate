import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import AgentInfo from "../components/Agentinfo/AgentInfo.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ComponentGallery from "./ComponentGallery.jsx";

class Index extends React.Component {
  render() {
    return <>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/agent">Agent</NavLink>
        </li>
        <li>
          <NavLink to="/footer">Footer</NavLink>
        </li>
        <li>
          <NavLink to="/component_gallery">Component Gallery</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/agent">
          <AgentInfo />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/component_gallery">
          <ComponentGallery />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </>
  }
}

export default Index;
