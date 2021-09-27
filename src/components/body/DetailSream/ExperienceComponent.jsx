import React from 'react'

export default function ExperienceComponent(props) {
  return (
    <div className="experienceComponent">
      <h2 className="header_title mb-3">Expériences / Réalisations</h2>
      {props.profil?.map((e) => (
        <div className="experiencecard" key={e.id_experience_professionnelle}>
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="title_years">
                <p className="first_page_title">
                  {e.poste} chez <span>{e.entreprise}</span>
                </p>
                <span className="experiences_date">{`${(new Date(e.date_debut)).getDate()}/${(new Date(e.date_debut)).getMonth()+1}/${(new Date(e.date_debut)).getFullYear()}`} - {`${(new Date(e.date_fin)).getDate()}/${(new Date(e.date_fin)).getMonth()+1}/${(new Date(e.date_fin)).getFullYear()}`}</span>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <a className="see_more_text" href="/">
                  <i className="fas fa-chevron-right"></i>En savoir plus
                </a>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
