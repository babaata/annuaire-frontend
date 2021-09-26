import React from 'react'
import './LangueSection.css'

function LangueSection(props) {
    return (
        <div className="langue__section">
            <h2>Langues</h2>
            {props.langues?.map((l) => (
                <>
                    <span>{l.nom}</span>
                    <br/>
                </>
            ))}
        </div>
    )
}

export default LangueSection
