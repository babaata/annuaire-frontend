import React from 'react'
import Footer from '../../footer/Footer'
import Menubar from '../HomeScreen/Navbar/Menubar'
import ProfessionComponent from './ProfessionComponent'
<<<<<<< HEAD
import './DetailSectionHead.css'
import DetailSectionHead from './DetailSectionHead'

export default function DetailSection() {
    return (
        <div>
            
            {/* <Footer/> */}
=======
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
>>>>>>> 983a087c9861e47cb82e43c7051b9d4201ab51d4
        </div>
    )
}
