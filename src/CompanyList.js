import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import "./CompanyList.css";

/** Renders list of companies and search bar
 *
 * props: none
 *
 * state:
 * -companies: an array of company detail object
 *    -> [{handle, name, description, numEmployees, logoUrl},{...}]
 * -isLoading: T/F
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */
function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("STATE ==> companies", companies);
  console.log("STATE ==> isLoading", isLoading);

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const companiesResult = await JoblyApi.getCompanies();
      setCompanies(companiesResult);
      setIsLoading(false);
    }
    fetchCompanies();
  }, []);

  async function search(term) {
    const searchResult = await JoblyApi.getCompanies(term);
    setCompanies(searchResult);
  }

  if (isLoading) return <i>Loading...</i>;

  return (
    <div className="CompanyList">
      <SearchForm className="CompanyList-search" handleSearch={search} />
      {companies.length !== 0
        ?
        companies.map(company => <CompanyCard company={company} key={company.handle} />)
        :
        <p>Sorry, no results were found!</p>
      }
    </div>
  );

}

export default CompanyList;