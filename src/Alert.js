import React from "react";
import { v4 as uuid } from "uuid";

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