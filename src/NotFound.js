import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {


    return (
      <div className="NotFound">
        <p>
          The page does not exist.
        </p>
        <Link className="NotFound-link" to="/" >Home</Link>
      </div>
    );
  };

export default NotFound;