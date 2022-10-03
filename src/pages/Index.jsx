import React from "react";
import { NavLink, withRouter } from "react-router-dom";

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

export default withRouter(Index);
