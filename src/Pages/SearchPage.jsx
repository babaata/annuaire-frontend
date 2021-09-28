import React, { useState, useEffect }from "react";
import Inscription from "../components/body/HomeScreen/InscriptionSection/Inscription";
import Menubar from "../components/body/HomeScreen/Navbar/Menubar";
import SearchContain from "../components/body/SearchScreen/SearchContain";
import Footer from "../components/footer/Footer";
import { getDataAPI } from '../utils/fetchData';

function SearchPage(props) {
  const [profils, setProfils] = useState([])
  const [found, setFound] = useState(true)

  const getProfils = async () => {
    const res = await getDataAPI('users/search' + props?.location?.search)
    setProfils(res.data?.users)
    if (res.data?.users?.length === 0) {
      setFound(false)
    }
  }

  useEffect(() => {
    if(profils?.length === 0 && found === true) {
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
      {profils.length === 0 && found === true ? <div className="d-flex justify-content-center"><i className="fa fa-spinner fa-spin fa-2x"></i></div> : ''}
      <SearchContain profils={profils} found={found}/>
      <Footer />
    </div>
  );
}

export default SearchPage;
