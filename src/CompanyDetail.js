import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { useParams, Navigate, Link } from 'react-router-dom';
import JobCardList from "./JobCardList";

/** Show details of a company
 *
 * props:none
 *
 * state:
 * -companyDetail: an company detail object
 *    -> {handle, name, description, numEmployees, logoUrl, jobs:[...]}
 * -isLoading: T/F
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {

  const { handle } = useParams();
  const link = "/companies/baker-santos";

  const [companyDetail, setCompanyDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorReroute, setErrorReroute] = useState(false);

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

  if (errorReroute) return <Navigate to="/" />;
  if (isLoading) return <i>Loading...</i>;


  return (
    <div className="CompanyDetail">
      <Link to={`${link}`}>Go Here</Link>
      <h2>{companyDetail.name}</h2>
      <p>{companyDetail.description}</p>
      <JobCardList jobs={companyDetail.jobs} />
    </div>
  );

}

export default CompanyDetail;