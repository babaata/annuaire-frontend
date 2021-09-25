import React, { useState }from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";

function SearchBar() {
  const [inputs, setInputs] = useState([])
  
  const changeHandler = (e) => {
    e.preventDefault();
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  return (
    <div className="search__bar ">
      <div className="inputBar ">
        <i className="fas fa-user"></i>
        <input placeholder="Profession" name="profession" onChange={changeHandler}/>
      </div>
      <div className="inputBar ">
        <i className="fas fa-folder"></i>
        <input placeholder="Compétences" name="competences" onChange={changeHandler}/>
      </div>
      <div className="inputBar border-none">
        <i className="fas fa-map-marker-alt "></i>
        <input placeholder="Pays de résidence" name="pays" onChange={changeHandler}/>
      </div>
      <Link 
        to={{
          pathname: inputs.length !== 0 ?`/recherche/req=` : '',
          search: `${inputs?.profession ? 'profession=' + inputs?.profession : ''}${inputs?.competences ? '&competences=' + inputs?.competences : ''}${inputs?.pays ? '&pays=' + inputs?.pays : ''}`
         }}
      >
        <i className="fas fa-search loupe fa-2x"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
