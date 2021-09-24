import React from "react";
import "./banner.css";
import SearchBar from "./SearchBar";

export default function Banner() {
    return (
        <div className="Banner">
             <div className="banner_content">
                <h1 className="firstText">Toutes les compétences Guinéennes en un clic&nbsp;!</h1>
                <SearchBar/>
             </div>
        </div>
    )
}
