import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/** Form for user login
 * state:
 * -formdata: {username, password}
 * -isSubmitted: T/F
 * -errorMessages: an array of error messages [...]
 *
 * props:
 * -handleLogin: a function passed from parent component
 *
 * RoutesList -> SignupForm -> Alert
 */
function LoginForm({ handleLogin }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
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
    try {
      await handleLogin(formData);
      setFormData({ username: "", password: "" });
      navigate("/");
    }
    catch (err) {
      console.log("errors are",err)
      setErrorMessages(err);
    }
  }


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
          type="password"
          onChange={handleChange} />

        {errorMessages.length !== 0 &&
          <Alert errors={errorMessages} />
        }

        <button className="LoginForm-btn">Submit</button>
      </form>

    </div>
  );


}

export default LoginForm;