import React from "react";
import "./ProfileScreen.css";
function ProfileLeftSide() {
  return (
    <div className="profil__left__side">
      <div className="upload__photo">
        <div className="photo">
          <img src="../Images/abdoul.jpeg" alt="" />
        </div>
        <i className="fas fa-pen"></i>
        <p className="text-center mt-2 mb-0">Changer la photo de profil</p>
      </div>
      {/* FOrmulaire */}
      <div className="profile__personal__info">
        <p className="info__title">Informations personnelles</p>
        <form>
          <div className="input_info">
            <label name="nom et prenom">Nom </label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Prénom</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="prenom" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">E-mail</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="mail" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Telephone</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="tel" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Ville</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="ville" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info_combobox">
            <i className="fas fa-pen"></i>
            <select>
              <option selected>Veuillez choisir une langue</option>
              <option value="français">français</option>
              <option value="anglais">anglais</option>
              <option value="espagnol">espagnol</option>
            </select>
          </div>
          <button className="btns left">Enregistrer les modifications</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileLeftSide;
