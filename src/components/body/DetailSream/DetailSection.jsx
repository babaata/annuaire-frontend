import React from 'react'
import ProfessionComponent from './ProfessionComponent'
import CompetenceComponent from './CompetenceComponent';
import './Profession.css';
import ExperienceComponent from './ExperienceComponent';
import LangueSection from './LangueSection';
export default function DetailSection(props) {
    
    return (
        <div className="detailSection">
             <div className="detailRight">
             <ProfessionComponent profile={props.profile}/>
             <LangueSection langues={props.profile?.langues}/>
             </div>
            <div className="detailleft">
            <CompetenceComponent competences={props.profile?.profil?.competences}/>
            <ExperienceComponent workTitle="Experiences /Professionels" profil={props.profile?.profil?.experience_professionnelles}/>
            </div>
        </div>
    )
}
