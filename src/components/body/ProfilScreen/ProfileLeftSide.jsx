import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfil } from "../../../redux/actions/profilAction";
import Loading from "../../alert/Loading";
import "./ProfileScreen.css";


function ProfileLeftSide() {

  const {notify} = useSelector(state => state)

  const [profile, setProfile] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    ville: "",
    langue: ""
  })

  const dispatch = useDispatch()

  const submit = (e) =>{
    e.preventDefault()
    dispatch(createProfil(profile))
  }
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
        <p className="info__title">Informations personnelles</p>
        <form onSubmit={(e)=> submit(e)}>

          <div className="input_info">
            <label name="nom et prenom">Nom </label>
            <div className="inputbar">
              <input value={profile.nom} onChange={(e)=> setProfile({...profile, nom: e.target.value})} type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Prénom</label>
            <div className="inputbar">
              <input value={profile.prenom} onChange={(e)=> setProfile({...profile, prenom: e.target.value})} type="text" className="form-control" name="prenom" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">E-mail</label>
            <div className="inputbar">
              <input value={profile.email} onChange={(e)=> setProfile({...profile, email : e.target.value})} type="text" className="form-control" name="mail" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Telephone</label>
            <div className="inputbar">
              <input value={profile.telephone} onChange={(e)=> setProfile({...profile, telephone: e.target.value})} type="text" className="form-control" name="tel" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Ville</label>
            <div className="inputbar">
              <input value={profile.ville} onChange={(e)=> setProfile({...profile, ville: e.target.value})} type="text" className="form-control" name="ville" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info_combobox">
            <i className="fas fa-pen"></i>
            <select value={profile.langue} onChange={(e)=> setProfile({...profile, langue: e.target.value})}>
              <optgroup selected>Veuillez choisir une langue</optgroup>
              <optgroup value="français">français</optgroup>
              <optgroup value="anglais">anglais</optgroup>
              <optgroup value="espagnol">espagnol</optgroup>
            </select>
          </div>
          <button className="btns left">Enregistrer les modifications</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileLeftSide;
