import React from 'react'
import CompetenceComponent from '../components/body/DetailSream/CompetenceComponent';
import DetailSection from '../components/body/DetailSream/DetailSection';
import DetailSectionHead from '../components/body/DetailSream/DetailSectionHead';
import ProfessionComponent from '../components/body/DetailSream/ProfessionComponent';
import Menubar from '../components/body/HomeScreen/Navbar/Menubar';
import Footer from "../components/footer/Footer";
function ProfilDetails() {
    return (
        <div>
            <Menubar/>
            <DetailSectionHead/>
            <DetailSection/>
            <Footer/>
        </div>
    )
}

export default ProfilDetails
