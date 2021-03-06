import React from 'react'
import './LangueSection.css'

function LangueSection(props) {
    return (
      <div className="langue__section">
        <h2 className="header_title mb-3">Langues</h2>
        {props.langues?.length > 0 ? (
          <ul>
          {props.langues?.map((l) => (
            <li key={l.id_langue}>{l.nom}</li>
          ))}
        </ul>
        ) : "Aucune Langue Ajoutée"}
        
      </div>
    );
}

export default LangueSection
