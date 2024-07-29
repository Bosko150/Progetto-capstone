// src/components/SearchBar/SearchBar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import "./SearchBar.scss";

const SearchBar = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsChecked(!isChecked);
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    if (searchValue.trim()) {
      navigate(`/search?query=${searchValue}`);
    } else {
      navigate("/search");
    }
  };

  const handleClear = () => {
    setSearch("");
    navigate("/search"); // Resetta la ricerca e la query nella URL
  };

  return (
    <div className="searchbar-container">
      <input checked={isChecked} className="checkbox" type="checkbox" onChange={toggleSearch} />
      <div className="mainbox">
        <div className="iconContainer">
          <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        </div>
        <input
          className="search_input"
          placeholder="Terraria, Helldivers..."
          type="text"
          value={search}
          onChange={handleSearchChange}
        />
        {search && !isChecked && (
          <div className="clear-icon" onClick={handleClear}>
            <FaDeleteLeft />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
