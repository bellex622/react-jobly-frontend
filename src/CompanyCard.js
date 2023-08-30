import React, { useState, useEffect } from "react";


/**
 *
 *
 *
 */

function CompanyCard({ company }) {
  console.log("COMPANYCARD company", company);
  return (
    <div className="CompanyCard">
      <div className="CompanyCard-header">
        <h2>{company.name}</h2>
        {company.logoUrl !== null ?
        <img src={company.logoUrl} alt={`${company.name} logo`}/>
        :
        null }
      </div>
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard;