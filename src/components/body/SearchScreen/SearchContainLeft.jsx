import React from 'react'
import './SearchContainLeft.css'
function SearchContainLeft() {
    return (
        <div className="searchContainleft">
            <div className="header_title">
                <h2>Profession</h2>
            </div>
            <div className="fonction_name">
                <p>Comptable</p>
            </div>
            <div className="fonction_name">
                <p>Juriste</p>
            </div>
            <div className="fonction_name activepoint">
                <p>Comptable</p>
            </div>
            <div className="fonction_name">
                <p>Comptable</p>
            </div>
        </div>
    )
}

export default SearchContainLeft
