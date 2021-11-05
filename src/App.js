import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import ProfiDetails from "./Pages/ProfilDetails";
import CreateProfilePage from "./Pages/CreateProfilePage";
import { useEffect, useState } from 'react';
import { getDataAPI } from './utils/fetchData';
import AppContext from './redux/actions/AppContext';

function App() {
  const token = localStorage.getItem("firstLogin");
  const [user, setUser] = useState(null)
  const getCurrentUser = async (token) => {
    return await getDataAPI("user/me", token).then(setUser).catch(() => setUser(false));
  };
  const [profils, setProfils] = useState([])
  const [statistiques, setStatistiques] = useState([])

  const getProfils = async () => {
    const res = await getDataAPI('users')
    const rt = await getDataAPI('statistiques')
    setStatistiques(rt.data?.statistiques)
    setProfils(res.data?.users)
  }

  useEffect(() => {
    if (user === null && token) {
      getCurrentUser(token)
    }
    if(profils?.length === 0) {
      getProfils()
    }
  }, [user, token, profils])

  return (
    <AppContext.Provider value={user}>
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact><Home profils={profils} statistiques={statistiques}/></Route>
              <Route path="/recherche/" exact component={SearchPage} />
              <Route path="/profils" exact component={ProfilList} />
              <Route path="/profils/:profilsId" exact component={ProfiDetails} />
              {user ?
                <Route path="/profile" exact component={CreateProfilePage} />
              : '' }
              
              <Route path="*" exact>
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </Router>
      </div> 
    </AppContext.Provider>
  );
}

export default App;
