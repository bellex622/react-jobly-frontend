import React from "react";

/** Displays a job card
 *
 * props:
 * - job: {id, title, salary, equity}
 *
 * state: none
 *
 * JobCardList -> JobCard
 */
function JobCard({ job }) {

  return (
    <div className="JobCard">
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary !== null ? job.salary : "Not Provided"}</p>
      <p>Equity: {job.equity !== null ? job.equity : "Not Provided"}</p>
    </div>
  );

}

export default JobCard;