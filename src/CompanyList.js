import React, {useState, useEffect} from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
//import SearchForm from "./SearchForm";

/** Show list of all companies
 *
 * props: none
 *
 * state:
 * -companies: an array of company detail object [{...},{...}]
 * -isLoading: T/F
 * -searchContent
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 *
 */
function CompanyList(){
const [companies, setCompanies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

console.log("STATE ==> companies", companies);
console.log("STATE ==> isLoading", isLoading);

useEffect(function fetchCompaniesWhenMounted(){
  async function fetchCompanies(){
    const companiesResult = await JoblyApi.getCompanies();
    setCompanies(companiesResult);
    setIsLoading(false);
  }
  fetchCompanies();
}, []);

if(isLoading) return <i>Loading...</i>;

return (
  <div className="CompanyList">
    {companies.map(company => <CompanyCard company={company} key={company.handle} />)}
  </div>
)

}

export default CompanyList;