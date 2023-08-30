import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard"


/** Render the job list
 *
 * props:
 * -jobs: an array of job objects [{...},{...}]
 *
 */

function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </div>
  );


}

export default JobCardList;