import './App.css';
import React, { useState } from "react";
import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import JoblyApi from './api';

/** Render the Jobly app
 *
 * props: none
 *
 * state:
 * -isLoggedIn: T/F
 * -userData: {username, firstName, lastName, email, isAdmin, applications}
 * -token: token generated either from user registration or user login
 *
 * context:
 * -isLoggedIn: T/F
 *
 * App -> {Navigation, RoutesList}
*/

function App() {

  //TODO:just use userData to keep track of login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");

  console.log("STATE ==> userData", userData);
  console.log("STATE ==> token", token);

  async function userSignup(userInfo) {
      const token = await JoblyApi.signup(userInfo);
      const user = await JoblyApi.getUser();
      setIsLoggedIn(true);
      setToken(token);
      setUserData(user);
  }


  async function userLogin(loginData) {
      const token = await JoblyApi.login(loginData);
      console.log("RESULT OF SIGN IN=", token);
      const user = await JoblyApi.getUser();
      setIsLoggedIn(true);
      setToken(token);
      setUserData(user);
  }

  function userLogout() {
    setIsLoggedIn(false);
    setToken("");
    setUserData({});
  }

  return (
    <div className="App">
      <userContext.Provider value={{ isLoggedIn }}>
        <BrowserRouter>
          <Navigation username={userData.username} handleLogOut={userLogout} />
          <RoutesList handleSignup={userSignup} handleLogin={userLogin} userData={userData} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
