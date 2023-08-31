import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { useParams, Navigate, Link } from 'react-router-dom';
import JobCardList from "./JobCardList";
import NotFound from "./NotFound";

/** Show details of a company
 *
 * props:none
 *
 * state:
 * -companyDetail: an company detail object
 *    -> {handle, name, description, numEmployees, logoUrl, jobs:[...]}
 * -isLoading: T/F
 * -errorReroute: T/F
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {

  const { handle } = useParams();

  const [companyDetail, setCompanyDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorReroute, setErrorReroute] = useState(false);

  //Fetch company detail from API with dependecies on handle
  //if no company found, update errorReroute to be true
  useEffect(function fetchCompanyDetailWhenMounted() {
    async function fetchCompanyDetail() {
      try {
        const companyDetailResult = await JoblyApi.getCompany(handle);
        setCompanyDetail(companyDetailResult);
        setIsLoading(false);
      } catch (err) {
        setErrorReroute(true);
      }
    }
    fetchCompanyDetail();
  }, [handle]);

  if (errorReroute) return <NotFound />;
  if (isLoading) return <i>Loading...</i>;


  return (
    <div className="CompanyDetail">
      <h2>{companyDetail.name}</h2>
      <p>{companyDetail.description}</p>
      <JobCardList jobs={companyDetail.jobs} />
    </div>
  );

}

export default CompanyDetail;