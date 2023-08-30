import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';



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
    "fontWeight": "bold",
    "color":"black"
  };

  return (
    <nav className="Navigation">
      <NavLink to="/"
        className="Navigation-home"
        style={({ isActive }) => isActive ? activeStyle : undefined}
        end>
        Jobly
      </NavLink>
      <div className="Navigation-pages">
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
      </div>

    </nav>
  );
}

export default Navigation;