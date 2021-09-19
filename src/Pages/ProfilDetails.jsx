import React from 'react'
import DetailSectionHead from '../components/body/DetailSream/DetailSectionHead';
import ProfessionComponent from '../components/body/DetailSream/ProfessionComponent';
import Menubar from '../components/body/HomeScreen/Navbar/Menubar';
import Footer from "../components/footer/Footer";
function ProfilDetails() {
    return (
        <div>
            <Menubar/>
            <DetailSectionHead/>
            <ProfessionComponent/>
            <Footer/>
        </div>
    )
}

export default ProfilDetails
