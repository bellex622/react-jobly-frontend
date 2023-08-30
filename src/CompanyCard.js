import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";


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
          {company.logoUrl !== null ?
            <img src={company.logoUrl} alt={`${company.name} logo`} />
            :
            null}
          <p>{company.description}</p>

        </Link>

      </div>
    </div>
  );
}

export default CompanyCard;