import React, { useState, useEffect } from "react";
import JoblyApi from "./api";

/** Render a job card
 *
 * props:
 * - job: {id, title, salary, equity}
 *
 */
function JobCard({ job }) {

  return (
    <div className="jobCard">
      <h3>{job.title}</h3>
      <p>Salary:{job.salary}</p>
      <p>Equity:{job.equity}</p>
    </div>
  );


}

export default JobCard;