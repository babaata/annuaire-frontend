import React, { useEffect, useState } from "react";
import ProfileLeftSide from "./ProfileLeftSide";
import ProfileRightSide from "./ProfileRightSide";
import "./ProfileScreen.css";

function ProfileInfo() {
  const [btnVal, setbtnVal] = useState(0);
  const handleClickleft = () => {
    setbtnVal(0);
  };
  const handleClickright = () => {
    setbtnVal(1);
  };
  useEffect(() => {}, []);

  return (
    <div className="profile__info">
      <div className="profile__btn ">
        <button
          onClick={handleClickleft}
          className={`btns ${btnVal === 0 ? "noBg" : " "}`}
        >
          Informations Personelles
        </button>
        <button
          onClick={handleClickright}
          className={`btns ${btnVal === 1 ? "noBg" : " "}`}
        >
          Informations professionnelles
        </button>
      </div>
      <div className="profil__center__content">
        {btnVal === 0 ? <ProfileLeftSide /> : <ProfileRightSide />}
        <button
          className="nextBtn"
          onClick={btnVal === 0 ? handleClickright : handleClickleft}
        >
          {btnVal === 0 ? "Suivant" : "Précedent"}
          <i className={`fas fa-caret-${btnVal === 0 ? "right" : "left"}`} />
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
