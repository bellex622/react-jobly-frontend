import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";


/** Render a list of jobs and search bar
 *
 * props: none
 *
 * state:
 * -jobs: an array of job detail objects
 *    -> [{id, title, salary, equity, companyHandle, companyName},{...}]
 * -isLoading: T/F
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 *
 */
function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("STATE ==> jobs", jobs);
  // console.log("STATE ==> isLoading", isLoading);

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getJobs();
      setJobs(jobsResult);
      setIsLoading(false);
    }
    fetchJobs();
  }, []);

  /** Fetch the jobs info by search term, and update state of jobs*/
  async function search(term) {
    const searchResult = await JoblyApi.getJobs(term);
    setJobs(searchResult);
  }

  if (isLoading) return <i>Loading...</i>;

  return (
    <div className="JobList">
      <SearchForm handleSearch={search} />
      {jobs.length !== 0
        ?
        jobs.map(job => <JobCard job={job} key={job.id} />)
        :
        <p> Sorry, no results were found! </p>
      }
    </div>
  );
}

export default JobList;