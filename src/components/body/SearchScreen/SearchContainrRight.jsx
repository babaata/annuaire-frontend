import React from "react";
import SearchContainCard from "./SearchContainCard";
import './SearchContainRight.css'

function SearchContainrRight(props) {
  
  return (
    <div className="search__contain__right">
      {props.found === false ? <div className="container"><div className="alert alert-primary text-center"><p>Aucun profil n'a été trouvé</p></div></div> :
      props?.profils?.map((p) => (
        <SearchContainCard profil={p} key={p.id_utilisateur}/>
      ))
      }
    </div>
  );
}

export default SearchContainrRight;
