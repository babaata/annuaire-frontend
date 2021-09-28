import React from "react";
import "./banner.css";
import SearchBar from "./SearchBar";

export default function Banner() {
    return (
        <div className="Banner">
             <div className="banner_content">
                <h1 className="firstText">Le portail des compétences guinéennes &nbsp;!</h1>
                <SearchBar/>
             </div>
        </div>
    )
}
