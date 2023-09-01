import React from "react";
import { v4 as uuid } from "uuid";

/** Alert for validation errors
 *
 * state: none
 *
 * props:
 * -errors : an array of error messages [...]
 *
 * {LoginForm, SignupForm, ProfileForm} -> Alert
 */
function Alert({ errors }) {
  console.log("ERROR=", errors);

  return (
    <div className="Alert">
      {errors.map(err =>
        <p key={uuid()}>{err}</p>)}
    </div>
  );
}

export default Alert;