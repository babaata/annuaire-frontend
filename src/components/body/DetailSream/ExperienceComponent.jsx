import React from 'react'

export default function ExperienceComponent(props) {
  return (
    <div className="experienceComponent">
      <h2 className="header_title tile">Expériences / Réalisations</h2>
      {props.profil?.map((e) => (
        <div className="experiencecard" key={e.id_experience_professionnelle}>
          <div className="title_years">
            <p className="first_page_title">
              {e.poste} chez <span>{e.entreprise}</span>
              <a href="/">
                <i className="fas fa-chevron-right"></i>En savoir plus
              </a>
            </p>
            <span>{e.date_debut} - {e.date_fin}</span>
            <hr />
          </div>
          <div className="see_more"></div>
        </div>
      ))}
    </div>
  );
}
