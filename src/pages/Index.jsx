import React from "react";
import { NavLink  } from "react-router-dom";

class Index extends React.Component {
  render() {
    return <>
      <ul>        
        <li>
          <NavLink to="/foo">Foo</NavLink>
        </li>
        <li>
          <NavLink to="/bar">Bar</NavLink>
        </li>        
      </ul>      
    </>
  }
}

export default Index;
