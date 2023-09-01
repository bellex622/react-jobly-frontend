import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "./api";
import Alert from "./Alert";

/** Form for user Signup
 * state:none
 * props:
 * -handleSubmit: function passed from parent component
 */
function SignupForm({ handleSignup }) {

  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);
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
    const res = await handleSignup(formData);
    if (res) {
      setErrorMessages(res);
    } else {
      setIsSubmitted(true);
      setFormData(initialState);
    }
  }

  if (isSubmitted) return <Navigate to="/" />;

  return (
    <div className="SignupForm">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username</label>
        <input className="SignupForm-username"
          name="username"
          id="username"
          onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input className="Signup-password"
          name="password"
          id="password"
          onChange={handleChange} />

        <label htmlFor="firstName">First Name</label>
        <input className="SignupForm-firstName"
          name="firstName"
          id="firstName"
          onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input className="SignupForm-lastName"
          name="lastName"
          id="lastName"
          onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input className="SignupForm-email"
          name="email"
          id="email"
          onChange={handleChange} />

        {errorMessages !== [] &&
          <Alert errors={errorMessages} />
        }

        <button className="SignupForm-btn">Submit</button>
      </form>

    </div>
  );


}

export default SignupForm;