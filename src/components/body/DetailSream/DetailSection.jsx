import React from 'react'
import ProfessionComponent from './ProfessionComponent'
import CompetenceComponent from './CompetenceComponent';
import './Profession.css';
import ExperienceComponent from './ExperienceComponent';
export default function DetailSection() {
    return (
        <div className="detailSection">
            <ProfessionComponent />
            <div className="detailleft">
            <CompetenceComponent />
            <ExperienceComponent />
            </div>
        </div>
    )
}
