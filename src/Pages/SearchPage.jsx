import React from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";

function SearchPage() {
  return (
    <div>
      <Menubar page="profdetails" />
      <Inscription
        status="false"
        margin="3%"
        text="Resultat de Recherche:UX design"
      />
    </div>
  );
}

export default SearchPage;
