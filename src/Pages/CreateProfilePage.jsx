import React from 'react'
import ProfileInfo from '../components/body/ProfilScreen/ProfileInfo'
import Menubar from '../components/body/HomeScreen/Navbar/Menubar'
import Footer from '../components/footer/Footer'

function CreateProfilePage() {
    return (
        <div>
            <Menubar />
            <ProfileInfo/>
            <Footer/>
        </div>
    )
}

export default CreateProfilePage
