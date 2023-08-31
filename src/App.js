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

  async function userSignup(userInfo) {
    const res = await JoblyApi.signup(userInfo);
    console.log("res from user singup", res)
    setIsLoggedIn(true);
    setToken(res.token);
    setUserData(userInfo);
  }
  async function userLogin(loginData) {
    const res = await JoblyApi.login(loginData);
    setIsLoggedIn(true);
    setToken(res.token);
    setUserData(loginData);
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
          <Navigation username={userData.username} handleLogOut={userLogout}/>
          <RoutesList handleSignup={userSignup} handleLogin={userLogin} userData={userData}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
