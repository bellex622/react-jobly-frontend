import './App.css';
import React, { useState, useEffect } from "react";
import userContext from "./userContext";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import JoblyApi from './api';
import decode from "jwt-decode";

/** Render the Jobly app
 *
 * props: none
 *
 * state:
 * -userData: {username, firstName, lastName, email, isAdmin, applications}
 * -token: token generated either from user registration or user login
 *
 * local storage:
 * - token: string token
 * - user: object of user data
 *
 * context:
 * - hasToken: boolean
 * - userInfo: {username, firstName, lastName, email, isAdmin, applications}
 *
 * App -> {Navigation, RoutesList}
*/

function App() {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  //TODO: set token state to the value of token in localStorage (or "");
  // const[token, setToken] = useState((localStorage.getItem('token')) || "");

  console.log("STATE ==> userData", userData);
  console.log("STATE ==> token", token);

  const userToken = localStorage.getItem('token');
  const userInfo = JSON.parse(localStorage.getItem('user'));

  useEffect(function fetchUserDetailsWhenTokenChanges(){
    async function fetchUserDetails(){
      if(token.length){
      const {username} = decode(JoblyApi.token);
      const user = await JoblyApi.getUser(username);
      setUserData(user);

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      }
    }
    fetchUserDetails();

  }, [token]);


  async function userSignup(userInfo) {
      const token = await JoblyApi.signup(userInfo);
      setToken(token);
  }

  async function userLogin(loginData) {
      const token = await JoblyApi.login(loginData);
      setToken(token);
  }

  function userLogout() {
    setToken("");
    localStorage.clear();
    setUserData({});
  }
//TODO: logic, if we do have token but don't have userData, loading screen
//TODO: go back to using user.username in context to check nav/routelist/homepage logic
  return (
    <div className="App">

      <userContext.Provider value={{ hasToken: Boolean(userToken), userInfo }}>
        <BrowserRouter>
          <Navigation handleLogOut={userLogout} />
          <RoutesList handleSignup={userSignup} handleLogin={userLogin} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
