import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import ProfiDetails from "./Pages/ProfilDetails";
import NotFound from './components/NotFound';
import CreateProfilePage from "./Pages/CreateProfilePage";
import NotAuth from "./components/NotAuth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


function App() {


  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recherche" exact component={SearchPage} />
            <Route path="/profils" exact component={ProfilList} />
            <Route path="/profils/:profilsId" exact component={ProfiDetails} />
            <Route path="/profile" exact component={CreateProfilePage}/>
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
