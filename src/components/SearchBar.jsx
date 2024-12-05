import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ query, setSearchQuery, currentPage }) => {
  const handleSearch = () => {
    setSearchQuery(query); // 검색어 상태 업데이트
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)} // 검색어 상태 업데이트
        placeholder={`Search for a ${currentPage === "movies" ? "movie" : "book"}...`}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
