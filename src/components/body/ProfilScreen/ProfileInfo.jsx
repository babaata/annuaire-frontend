import React, { useEffect, useState, useContext } from "react";
import ProfileLeftSide from "./ProfileLeftSide";
import ProfileRightSide from "./ProfileRightSide";
import "./ProfileScreen.css";
import { Link } from 'react-router-dom';
import AppContext from '../../../redux/actions/AppContext';

function ProfileInfo(props) {
  const [btnVal, setbtnVal] = useState(0);
  const handleClickleft = () => {
    setbtnVal(0);
  };
  const handleClickright = () => {
    setbtnVal(1);
  };
  useEffect(() => {}, []);

  const user = useContext(AppContext)

  return (
    <div className="profile__info">
      <div className="profile__btn ">
        <Link to={{
            pathname: '/profils/'+ user?.data?.user?.nom_utilisateur,
            profile: user?.data?.user,
            }}>
          <span className="voir_profil btn">
            Mon profil
          </span>
        </Link>
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
