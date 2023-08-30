import React, { useState } from "react";

/** Displays the search form and handle search
 *
 * props:
 * -handleSearch
 *
 * state:
 * - term => ""
 *
 * CompanyList > SearchForm
 */
function SearchForm({ handleSearch }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(term);
    setTerm("");
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Enter search term..." />
        <button>Search</button>
      </form>
    </div>
  );

}

export default SearchForm;