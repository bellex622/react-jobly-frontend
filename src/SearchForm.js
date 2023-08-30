import React, { useState, useEffect } from "react";
import JoblyApi from "./api";



/** Render the search form and handle search
 *
 * props:
 * -handleSearch
 *
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
    <form onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={handleChange}
        placeholder="Enter search term..." />
      <button>Search</button>
    </form>
  );

}

export default SearchForm;