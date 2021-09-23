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


function App() {

  const token = localStorage.getItem('firstLogin')

  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recherche" exact component={!token ? NotAuth : SearchPage} />
            <Route path="/profils" exact component={!token ? NotAuth : ProfilList} />
            <Route path="/profils/:profilsId" exact component={!token ? NotAuth : ProfiDetails} />
            <Route path="/profile" exact component={!token ? NotAuth : CreateProfilePage} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
