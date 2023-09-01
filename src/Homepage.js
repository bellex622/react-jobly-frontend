import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import userContext from "./userContext";

/** Show the homepage
 *
 * props:
 * -firstName
 *
 * state:none
 *
 * context:
 * -isLoggedIn: T/F
 *
 * RoutesList -> Homepage -> Link
 */
function Homepage({ firstName }) {

  const { isLoggedIn } = useContext(userContext);

  return (
    <div className="Homepage">

      {
        isLoggedIn
        ?

          <div>
            < h1 > Jobly </h1 >
            <h3> where the jobs are </h3>
            <p> Welcome back, {firstName}! </p>
          </div >

        :
          <div>
            <h1> Jobly </h1>
            <h3> where the jobs are </h3>
            <Link to="/login"> Login </Link>
            <Link to="/signup">Sign up</Link>
          </div>
      }

    </div>
  );


}

export default Homepage;