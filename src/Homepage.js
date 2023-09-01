import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import userContext from "./userContext";

/** Show the homepage
 *
 * props: none
 *
 * state: none
 *
 * context:
 * -hasToken: boolean
 * -userInfo: {username, firstName, lastName, email, isAdmin, applications}
 *
 * RoutesList -> Homepage -> Link
 */
function Homepage() {

  const { hasToken, userInfo } = useContext(userContext);

  return (
    <div className="Homepage">

      {
        hasToken
        ?

          <div>
            < h1 > Jobly </h1 >
            <h3> where the jobs are </h3>
            <p> Welcome back, {userInfo.firstName}! </p>
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