import React from 'react'
import './Profession.css';
export default function CompetenceComponent(props) {

    return (
        <div className="competenceComponent_global mb-lg-4">
            <h2 className="header_title mb-2">Compétences</h2>
            <div className="competencetitle_head">
                {props.competences?.map((c) => (
                    <div className="competencetitle" key={c.id_competence}>
                        <p>
                            {c.nom}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
