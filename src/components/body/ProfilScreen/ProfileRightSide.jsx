import React from "react";
import "./ProfileScreen.css"
function ProfileRightSide() {
  return (
    <div className="profile__personal__info">
        <div className="profile__pro__info">
        <form>
          <div className="input_info">
            <label name="profession">Profession</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="specialite">Spécialité</label>
            <div className="inputbar">
              <input type="text" className="form-control" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="resume">Resumé</label>
            <div className="inputbar">
              <textarea type="text" className="form-control text_resize" name="name" />
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="competence">Competence</label>
            <div className="inputbar">
              <div className="added_compo">
              <a href="/"><i className="fas fa-plus-square"></i></a>
              </div>
              <i className="fas fa-pen"></i>
            </div>
          </div>

          <div className="input_info">
            <label name="nom et prenom">Experience / Realisation</label>
            <div className="inputbar">
              <div className="added_compo">
              <hr/>
              <i className="fas fa-plus-square"></i>
              <button className="add_experience">Ajouter une nouvelle experience ou realiser</button>
              </div>
              <i className="fas fa-pen"></i>
            </div>
          </div>
          <button className="btns left">Enregistrer les modifications</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileRightSide;
