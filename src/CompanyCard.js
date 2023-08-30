import React from "react";
import { Link } from "react-router-dom";


/** Displays company card with link to company detail page
 *
 * props:
 * - company => {handle, name, description, numEmployees, logoUrl}
 *
 * state: none
 *
 * CompanyList > CompanyCard
 */

function CompanyCard({ company }) {
  console.log("COMPANYCARD company", company);
  return (
    <div className="CompanyCard">
      <div className="CompanyCard-header">
        <Link
          to={`/companies/${company.handle}`}
          className="CompanyCard-link">
          {company.name}
        </Link>
        {company.logoUrl !== null ?
          <img src={company.logoUrl} alt={`${company.name} logo`} />
          :
          null}
      </div>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;