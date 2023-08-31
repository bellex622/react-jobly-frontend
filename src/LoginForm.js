import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "./api";

/** Form for user login
 * state:none
 * props:
 * -handleSubmit: function passed from parent component
 */
function LoginForm({ handleLogin }) {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(formData);
    setIsSubmitted(true);
    setFormData({ username: "", password: "" });
  }

  if (isSubmitted) return <Navigate to="/" />;

  return (
    <div className="LoginForm">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username</label>
        <input className="LoginForm-username"
          name="username"
          id="username"
          onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input className="LoginForm-password"
          name="password"
          id="password"
          onChange={handleChange} />
        <button className="LoginForm-btn">Submit</button>
      </form>

    </div>
  );


}

export default LoginForm;