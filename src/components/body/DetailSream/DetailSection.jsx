import React from 'react'
import Footer from '../../footer/Footer'
import Menubar from '../HomeScreen/Navbar/Menubar'
import ProfessionComponent from './ProfessionComponent'
import CompetenceComponent from './CompetenceComponent';
import './Profession.css';
import ExperienceComponent from './ExperienceComponent';
import LangueSection from './LangueSection';
export default function DetailSection() {
    return (
        <div className="detailSection">
             <div className="detailRight">
             <ProfessionComponent />
             <LangueSection/>
             </div>
            <div className="detailleft">
            <CompetenceComponent />
            <ExperienceComponent workTitle="Experiences /Professionels" />
            </div>
        </div>
    )
}
