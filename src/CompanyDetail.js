import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import { useParams } from 'react-router-dom';
import JobCardList from "./JobCardList";

/** Show details of a company
 *
 * props:none
 *
 * state:
 * -companyDetail: an company detail object {basic info, jobs:[...]}
 * -isLoading: T/F
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */
function CompanyDetail() {

  const { handle } = useParams();

  const [companyDetail, setCompanyDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchCompanyDetailWhenMounted() {
    async function fetchCompanyDetail() {
      const companyDetailResult = await JoblyApi.getCompany(handle);
      setCompanyDetail(companyDetailResult);
      setIsLoading(false);
    }
    fetchCompanyDetail();
  }, []);

  if (isLoading) return <i>Loading...</i>;

  return (
    <div className="CompanyDetail">
      <p>This is CompanyDetail!!!!</p>
      <h2>{companyDetail.name}</h2>
      <p>{companyDetail.description}</p>
      <JobCardList jobs={companyDetail.jobs} />
    </div>
  );

}

export default CompanyDetail;