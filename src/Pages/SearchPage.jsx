import React from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import SearchContain from "../components/body/SearchScreen/SearchContain";
import Footer from "../components/footer/Footer";

function SearchPage() {
  return (
    <div>
      <Menubar page="profdetails" />
      <Inscription
        status={false}
        margin="3%"
        text="Resultat de Recherche:UX design"
      />
      <SearchContain />
      <Footer />
    </div>
  );
}

export default SearchPage;
