import React from 'react'
import './banner.css';
import SearchBar from './SearchBar';

export default function Banner() {
    return (
        <div className="Banner">
             <h1 className="firstText">Toutes les compétences Guinéennes en un clic !</h1>
             <SearchBar/>
        </div>
    )
}
