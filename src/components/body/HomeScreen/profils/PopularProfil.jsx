import React from "react";
import CardProfile from "./CardProfile";
import "./PopularProfil.css";

function PopularProfil() {
  return (
    <div className="profiles">
      <h1>Profils Populaires</h1>
      <div className="card__section">
        <CardProfile image="./images/abdoul.jpeg" color="orange" />
        <CardProfile image="./images/model.jpeg" color="#009B95" />
        <CardProfile image="./images/souare.jpeg" color="#ED2F24" />
        <CardProfile image="./images/younouss.jpeg" color="#326FB4" />
        <CardProfile image="./images/kabaci.jpeg" color="#AF3862" />
        <CardProfile image="./images/woman.jpeg" color="#ED2F24" />
        <CardProfile image="./images/kabaci.jpeg" color="#FBB017" />
        <CardProfile image="./images/woman.jpeg" color="#1CA5A0" />
      </div>
      <button>Voir tous les profiles <i className="fas fa-plus"></i></button>
    </div>
  );
}

export default PopularProfil;
