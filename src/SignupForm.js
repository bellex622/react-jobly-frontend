import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/** Form for user Signup
 *
 * state:
 * -formdata: {username, password}
 * -isSubmitted: T/F
 * -errorMessages: an array of error messages [...]
 *
 * props:
 * -handleSignup: function passed from parent component
 *
 * RoutesList -> SignupForm -> Alert
 */
function SignupForm({ handleSignup }) {
const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialState);
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
      await handleSignup(formData);
      setFormData({ username: "", password: "" });
      navigate("/");
    }
    catch(err){
      setErrorMessages(err);
    }

  }

  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   const res = await handleSignup(formData);
  //   if (res) {
  //     setErrorMessages(res);
  //   } else {
  //     setIsSubmitted(true);
  //     setFormData(initialState);
  //   }
  // }

  // if (isSubmitted) return <Navigate to="/" />;

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
          type="password"
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
          type="email"
          onChange={handleChange} />

        {errorMessages.length !== 0 &&
          <Alert errors={errorMessages} />
        }

        <button className="SignupForm-btn">Submit</button>
      </form>

    </div>
  );


}

export default SignupForm;