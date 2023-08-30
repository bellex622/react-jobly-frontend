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
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );

}

export default JobCard;