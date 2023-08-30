import React from "react";
import { NavLink } from "react-router-dom";



/**
 * Render NavLinks to corresponding routes.
 *
 * props: none
 * state: none
 *
 * App -> Navigation
 *
 */


function Navigation() {

  let activeStyle = {
    "fontWeight": "bold"
  };

  return (
    <nav className="Navigation">
      <NavLink to="/"
        className="Navigation-home"
        style={({ isActive }) => isActive ? activeStyle : undefined}
        end>
        Jobly
      </NavLink>

      <NavLink to="/companies"
        className="Navigation-companies"
        style={({ isActive }) => isActive ? activeStyle : undefined}
        end>
        Companies
      </NavLink>

      <NavLink to="/jobs"
        className="Navigation-jobs"
        style={({ isActive }) => isActive ? activeStyle : undefined}
        end>
        Jobs
      </NavLink>
    </nav>
  );
}

export default Navigation;