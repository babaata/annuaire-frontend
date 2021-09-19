import React from "react";
import SearchContainLeft from "./SearchContainLeft";
import SearchContainrRight from "./SearchContainrRight";
import "./SearchContain.css";

function SearchContain() {
  return (
    <div className="search__contain">
      <SearchContainLeft />
      <SearchContainrRight />
    </div>
  );
}

export default SearchContain;
