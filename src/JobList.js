import React, {useState, useEffect} from "react";


/** Render a list of all jobs
 *
 * props: none
 *
 * state:
 * -jobs: an array of job detail objects [{...},{...}]
 * -isLoading: T/F
 * -searchContent
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 *
 *
 */
function JobList(){

  return (
    <div className="JobList">
      <p>This is JobList!!!!</p>
    </div>
  )

  }

  export default JobList;