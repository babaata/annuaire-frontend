import React from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="search__bar px-0">
      <div className="inputBar ">
        <i className="fas fa-user"></i>
        <input placeholder="Profession" />
      </div>
      <div className="inputBar ">
        <i className="fas fa-folder"></i>
        <input placeholder="Compétences" />
      </div>
      <div className="inputBar">
        <i className="fas fa-map-marker-alt "></i>
        <input placeholder="Pays de résidence" />
      </div>
      <Link to="/search-page">
        <i className="fas fa-search" style={{color:"#fff"}}></i>
      </Link>
    </div>
  );
}

export default SearchBar;
