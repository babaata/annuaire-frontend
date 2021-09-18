import React from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import CardProfile from "../components/body/HomeScreen/profils/CardProfile";
import Footer from "../components/footer/Footer";
import "../components/body/HomeScreen/profils/PopularProfil.css";
import "./ProfilList.css"

function ProfilList() {
  return (
    <div className="profil_list">
      <Menubar />
      <Inscription margin="2%" text="Tous les profils" />
      <div className="card__section items">
        <CardProfile image="./images/abdoul.jpeg" color="orange" />
        <CardProfile image="./images/model.jpeg" color="#009B95" />
        <CardProfile image="./images/souare.jpeg" color="#ED2F24" />
        <CardProfile image="./images/younouss.jpeg" color="#326FB4" />
        <CardProfile image="./images/kabaci.jpeg" color="#AF3862" />
        <CardProfile image="./images/woman.jpeg" color="#ED2F24" />
        <CardProfile image="./images/kabaci.jpeg" color="#FBB017" />
        <CardProfile image="./images/woman.jpeg" color="#1CA5A0" />
      </div>
      <Footer />
    </div>
  );
}

export default ProfilList;
