import React, { useContext } from "react";
import userContext from "./userContext";
import { NavLink } from "react-router-dom";
import './Navigation.css';

/** Render NavLinks to corresponding routes.
 *
 * props: none
 * -handleLogOut: a function passed from parent component
 * -username
 *
 * state:none
 *
 * context:
 * -isLoggedIn: T/F
 *
 * App -> Navigation
 */
function Navigation({ handleLogOut, username }) {
  const { isLoggedIn } = useContext(userContext);

  let activeStyle = {
    "fontWeight": "bold",
    "color": "black"
  };

  return (

    <nav className="Navigation">

      {!isLoggedIn ?
        <div>
          <NavLink to="/"
            className="Navigation-home"
            style={({ isActive }) => isActive ? activeStyle : undefined}
            end>
            Jobly
          </NavLink>
          <div className="Navigation-pages">
            <NavLink to="/login"
              className="Navigation-login"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              end>
              Login
            </NavLink>

            <NavLink to="/signup"
              className="Navigation-signup"
              style={({ isActive }) => isActive ? activeStyle : undefined}
              end>
              Sign Up
            </NavLink>
          </div>
        </div>
        :
        <div>
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

            <NavLink to="/"
              className="Navigation-logout"
              style={({ isActive }) => isActive ? activeStyle : undefined
              }
              onClick={handleLogOut}
              end>
              Logout {username}
            </NavLink>

          </div>
        </div>

      }

    </nav >
  );
}

export default Navigation;