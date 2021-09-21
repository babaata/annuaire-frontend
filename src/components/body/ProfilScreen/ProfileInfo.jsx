import React, { useState } from "react";
import ProfileLeftSide from "./ProfileLeftSide";
import ProfileRightSide from "./ProfileRightSide";
import "./ProfileScreen.css";

function ProfileInfo() {
  const [btnVal, setbtnVal] = useState(0);
  const handleClickleft = () => {
    setbtnVal(0);
    console.log(btnVal);
  };
  const handleClickright = () => {
    setbtnVal(1);
    console.log(btnVal);
  };
  return (
    <div className="profile__info">
      <div className="profile__btn ">
        <button
          onClick={handleClickleft}
          className={`btns ${btnVal == 0 ? "noBg" : " "}`}
        >
          Informations Personelles
        </button>
        <button
          onClick={handleClickright}
          className={`btns ${btnVal == 1 ? "noBg" : " "}`}
        >
          Informations professionnelles
        </button>
      </div>
      <div className="profil__center__content">
        {btnVal == 0 ? <ProfileLeftSide /> : <ProfileRightSide />}
        <button className="nextBtn" onClick={handleClickleft}>
          Suivant<i className="fas fa-caret-right"></i>
        </button>

        <button className="nextBtn" onClick={handleClickright}>
          Précedent<i className="fas fa-caret-left"></i>
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
