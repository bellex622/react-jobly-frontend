import './App.css';
import React, { useState, useEffect } from "react";
import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import JoblyApi from './api';

/** Render the Jobly app
 *
 * props: none
 *
 * state: none
 *
 * App -> {Navigation, RoutesList}
*/

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");

  console.log("STATE ==> userData", userData);
  console.log("STATE ==> token", token);

  async function userSignup(userInfo) {
    try {
      const res = await JoblyApi.signup(userInfo);
      setIsLoggedIn(true);
      setToken(res.token);
      setUserData(res.user);
    } catch (err) {
      return err;
    }
  }
  async function userLogin(loginData) {
    try{
    const res = await JoblyApi.login(loginData);
    console.log("RESULT OF SIGN IN=", res);
    setIsLoggedIn(true);
    setToken(res.token);
    setUserData(res.user);
    } catch(err) {
      return err;
    }
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
