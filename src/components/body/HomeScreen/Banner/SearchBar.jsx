import React from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="search__bar ">
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
      <Link to="/recherche">
        <i className="fas fa-search loupe fa-2x"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
