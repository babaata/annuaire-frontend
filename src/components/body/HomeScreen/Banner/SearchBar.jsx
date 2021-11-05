import React, { useState }from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";
import { getDataAPI } from '../../../../utils/fetchData';

function SearchBar() {
  const [inputs, setInputs] = useState([])
  const [professions, setProfession] = useState([])
  const [competences, setCompetences] = useState([])
  const [pays, setPays] = useState([])
  
  const changeHandler = async (e) => {
    e.preventDefault();
    if (e.target.name === 'profession') {
      setCompetences([])
      setPays([])
      if (e.target.value.length > 1) {
      const res = await getDataAPI(`autompletion/experience?terme=${e.target.value}`)
      setProfession(res?.data?.data);
      } else {
        setProfession([])
      }
    } else if (e.target.name === 'competences') {
      setProfession([])
      setPays([])
      if (e.target.value.length > 1) {
        const res = await getDataAPI(`autompletion/competence?terme=${e.target.value}`)
        setCompetences(res?.data?.data);
      } else {
        setCompetences([])
      }
    } else if (e.target.name === 'pays') {
      setProfession([])
      setCompetences([])
      if (e.target.value.length > 1) {
        const res = await getDataAPI(`autompletion/pays?terme=${e.target.value}`)
        setPays(res?.data?.data);
      } else {
        setPays([])
      }
    }
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const jobHandler = (e) => {
    setInputs({profession: e.target.childNodes[0].data})
    document.getElementById('profession').value = e.target.childNodes[0].data;
    setProfession([])
  }

  const skillHandler = (e) => {
    setInputs({competences: e.target.childNodes[0].data})
    document.getElementById('competences').value = e.target.childNodes[0].data;
    setCompetences([])
  }

  const countrylHandler = (e) => {
    setInputs({pays: e.target.childNodes[0].data})
    document.getElementById('pays').value = e.target.childNodes[0].data;
    setPays([])
  }

  return (
    <div className="search__bar ">
      <div className="inputBar" style={{ position: 'relative'}}>
        <i className="fas fa-user"></i>
        <div className="content">
          <input type="text" placeholder="Profession" id="profession" name="profession" defaultValue={inputs['profession']} onChange={changeHandler} autoFocus={true}/>
          {professions?.length > 0 ? <div className="AUbT9">
            <div className="uajZCb">
              <div className="OBMEnb">
                <ul className="B43f7e">
                {professions?.map((p) => (
                  <li className="abct" key={p.id_experience_professionnelle}>
                    <div className="cIPGRd">
                      <div className="kbic sb43"><i className="fa fa-search" style={{ fontSize: '10px' }}></i></div>
                      <div className="rcTkSc">
                        <span onClick={jobHandler} style={{ cursor: 'pointer' }}>{p.poste}</span>
                      </div>
                    </div>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div> : ''}
        </div>
      </div>
      <div className="inputBar" style={{ position: 'relative'}}>
        <i className="fas fa-folder"></i>
        <div className="content">
          <input type="text" placeholder="Compétences" id="competences" name="competences" onChange={changeHandler} defaultValue={inputs['competences']}/>
          {competences?.length > 0 ? <div className="AUbT9">
            <div className="uajZCb">
              <div className="OBMEnb">
                <ul className="B43f7e">
                {competences?.map((p) => (
                  <li className="abct" key={p.id_competence}>
                    <div className="cIPGRd">
                      <div className="kbic sb43"><i className="fa fa-search" style={{ fontSize: '10px' }}></i></div>
                      <div className="rcTkSc">
                        <span onClick={skillHandler} style={{ cursor: 'pointer' }}>{p.nom}</span>
                      </div>
                    </div>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div> : ''}
        </div>
      </div>
      <div className="inputBar border-none" style={{ position: 'relative'}}>
        <i className="fas fa-map-marker-alt "></i>
        <div className="content">
          <input type="text" placeholder="Pays de résidence" id="pays" name="pays" onChange={changeHandler} defaultValue={inputs['pays']}/>
          {pays?.length > 0 ? <div className="AUbT9">
            <div className="uajZCb">
              <div className="OBMEnb">
                <ul className="B43f7e">
                {pays?.map((p) => (
                  <li className="abct" key={p.id_pays}>
                    <div className="cIPGRd">
                      <div className="kbic sb43"><i className="fa fa-search" style={{ fontSize: '10px' }}></i></div>
                      <div className="rcTkSc">
                        <span onClick={countrylHandler} style={{ cursor: 'pointer' }}>{p.nom}</span>
                      </div>
                    </div>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div> : ''}
        </div>
      </div>
      <Link 
        to={{
          pathname: inputs.length !== 0 ?`/recherche/` : '',
          search: `${inputs?.profession ? 'profession=' + inputs?.profession : ''}${inputs?.competences ? '&competences=' + inputs?.competences : ''}${inputs?.pays ? '&pays=' + inputs?.pays : ''}`
         }}
      >
        <i className="fas fa-search loupe fa-2x"></i>
      </Link>
    </div>
  );
}

export default SearchBar;
