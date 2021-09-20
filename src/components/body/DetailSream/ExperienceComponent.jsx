import React from 'react'

export default function ExperienceComponent() {
    return (
      <div className="experienceComponent">
        <h2 className="header_title tile">Expériences / Réalisations</h2>
        <div className="experiencecard">
          <div className="title_years">
            <p className="first_page_title">
              Lead designer chez <span>Google</span>
            </p>
            <p>2018 - à nos jours</p>
          </div>
          {/* <div className="see_more">
            <a href="/">
              <i class="fas fa-chevron-right"></i>En savoir plus
            </a>
          </div> */}
        </div>
        <hr />
      </div>
    );
}
