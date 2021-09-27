import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import ProfiDetails from "./Pages/ProfilDetails";
import CreateProfilePage from "./Pages/CreateProfilePage";
import Login from "./components/auth/Login/login.component";
import { useEffect, useState } from 'react';
import { getDataAPI } from './utils/fetchData';

function App() {
  const [profils, setProfils] = useState([])
  const [statistiques, setStatistiques] = useState([])

  const getProfils = async () => {
    const res = await getDataAPI('users')
    const rt = await getDataAPI('statistiques')
    setStatistiques(rt.data?.statistiques)
    setProfils(res.data?.users)
  }

  useEffect(() => {
    if(profils?.length === 0) {
      getProfils()
    }
  })
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact><Home profils={profils} statistiques={statistiques}/></Route>
            <Route path="/recherche/:req" exact component={SearchPage} />
            <Route path="/profils" exact component={ProfilList} />
            <Route path="/profils/:profilsId" exact component={ProfiDetails} />
            <Route path="/profile" exact component={CreateProfilePage} />
            <Route path="*" exact component={<Login />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
