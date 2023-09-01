import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Alert from "./Alert";

/** Form for user login
 * state:none
 * props:
 * -handleSubmit: function passed from parent component
 */
function LoginForm({ handleLogin }) {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await handleLogin(formData);
    if(res){
      setErrorMessages(res);
    } else {
    setIsSubmitted(true);
    setFormData({ username: "", password: "" });
    }
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

      {errorMessages !== [] &&
          <Alert errors={errorMessages} />
        }

        <button className="LoginForm-btn">Submit</button>
      </form>

    </div>
  );


}

export default LoginForm;