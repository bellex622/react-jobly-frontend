import React from "react";
import JobCard from "./JobCard";
import "./JobCard.css";


/** Displays the job list
 *
 * props:
 * -jobs: an array of job objects
 *    -> [{id, title, salary, equity, companyHandle, companyName},{...}]
 *
 * state: none
 *
 * JobList -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );

}

export default JobCardList;