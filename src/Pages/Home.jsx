import React from "react";
import Banner from "../components/body/HomeScreen/Banner/Banner";
import Competences from "../components/body/HomeScreen/CompetenceSection/Competences";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import PopularProfil from "../components/body/HomeScreen/profils/PopularProfil";
import StatistiqueSection from "../components/body/HomeScreen/StatistiqueSection/StatistiqueSection";
import Footer from "../components/footer/Footer";

function Home({auth}) {
  return (
    <div>
      <Menubar auth={auth}  page="home"/>
      <Banner />
      <PopularProfil />
      <Inscription status="true"  text="Vous êtes Guinéen, vous avez des compétences à faire valoir ?"/>
      <Competences />
      <StatistiqueSection />
      <Footer />
    </div>
  );
}

export default Home;
