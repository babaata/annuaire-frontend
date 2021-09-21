import React from "react";
import "./ProfileScreen.css";
function ProfileLeftSide() {
  return (
    <div className="profil__left__side">
      <div className="upload__photo">
        <div className="photo">
          <img src="./Images/abdoul.jpeg" alt="" />
        </div>
        <i className="fas fa-pen"></i>
        <p className="text-center mt-2 mb-0">Changer la photo de profil</p>
      </div>
       {/* FOrmulaire */}
      <div className="profile__personal__info">
        <form>
          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Nom et Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>
          <button className="btns left">Enregistrer les modifications</button>
         
        </form>
      </div>

    </div>
  );
}

export default ProfileLeftSide;
