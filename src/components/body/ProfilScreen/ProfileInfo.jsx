import React from 'react'
import ProfileLeftSide from './ProfileLeftSide'
import ProfileRightSide from './ProfileRightSide'
import "./ProfileScreen.css"

function ProfileInfo() {
    return (
        <div className="profile__info">
            <div className="profile__btn ">
                <button className="btns">Informations Personelles</button>
                <button className="btns">Informations professionnelles</button>
                </div>       
                <div className="profil__center__content">
                    <ProfileLeftSide/>
                    <ProfileRightSide/>
                </div> 
        </div>
    )
}

export default ProfileInfo
