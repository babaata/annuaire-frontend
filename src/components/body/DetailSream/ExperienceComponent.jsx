import React from 'react'

export default function ExperienceComponent() {
    return (
      <div className="experienceComponent">
        <h2 className="header_title tile">Expériences / Réalisations</h2>
        <div className="experiencecard">
          <div className="title_years">
            <p className="first_page_title">
              Lead designer chez <span>Google</span>
              <a href="/">
                <i className="fas fa-chevron-right"></i>En savoir plus
              </a>
            </p>
            <span>2018 - à nos jours</span>
            <hr />
          </div>
          <div className="see_more"></div>
        </div>
      </div>
    );
}
