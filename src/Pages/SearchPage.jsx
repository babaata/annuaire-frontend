import React, { useState, useEffect }from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import SearchContain from "../components/body/SearchScreen/SearchContain";
import Footer from "../components/footer/Footer";
import { getDataAPI } from '../utils/fetchData';

function SearchPage(props) {
  const [profils, setProfils] = useState([])
  const [t, setT] = useState(0)

  const getProfils = async () => {
    const res = await getDataAPI('users/search' + props?.location?.search)
    setProfils(res.data?.users)
    if (res.data?.users?.length === 0) {
      setT(1)
    }
  }

  useEffect(() => {
    if(profils?.length === 0 && t === 0) {
      getProfils()
    }
  })
  
  return (
    <div>
      <Menubar page="profdetails" />
      <Inscription
        status={false}
        margin="3%"
        text='Resultat de Recherche'
      />
      {profils.length === 0 && t === 0 ? <div className="d-flex justify-content-center"><i className="fa fa-spinner fa-spin fa-2x"></i></div> : profils.length !== 0 ? '' : <div className="container"><div className="alert alert-info text-center"><p>Aucun profil n'a été trouvé</p></div></div>}
      <SearchContain profils={profils}/>
      <Footer />
    </div>
  );
}

export default SearchPage;
