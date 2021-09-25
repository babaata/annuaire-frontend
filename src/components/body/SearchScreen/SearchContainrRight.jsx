import React from "react";
import SearchContainCard from "./SearchContainCard";
import './SearchContainRight.css'

function SearchContainrRight(props) {
  return (
    <div className="search__contain__right">
      {props?.profils?.map((p) => (
        <SearchContainCard profil={p} key={p}/>
      ))}
    </div>
  );
}

export default SearchContainrRight;
