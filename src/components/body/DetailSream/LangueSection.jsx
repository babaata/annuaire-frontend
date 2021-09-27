import React from 'react'
import './LangueSection.css'

function LangueSection(props) {
    return (
        <div className="langue__section">
            <h2>Langues</h2>
            {props.langues?.map((l) => (
                    <li key={l.id_langue}>{l.nom}</li>
            ))}
        </div>
    )
}

export default LangueSection
