import React from 'react'
import './searchbar.css'
function SearchBar() {
    return (
      <div className="search__bar px-0">
        <div className="inputBar ">
        <i class="fas fa-user"></i>
          <input placeholder="Profession"/>
        </div>
        <div className="inputBar ">
          <i class="fas fa-folder"></i>
          <input placeholder="Compétences"/>
        </div>
        <div className="inputBar">
          <i className="fas fa-map-marker-alt "></i>
          <input placeholder="Pays de résidence" />
        </div>
        <a href="/"><i class="fas fa-search"></i></a>
      </div>
    );
}

export default SearchBar
