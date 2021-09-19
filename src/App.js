import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import ProfiDetails from "./Pages/ProfilDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search-page" exact component={SearchPage} />
          <Route path="/prof-list" exact component={ProfilList} />
          <Route path="/detail-section" exact component={ProfiDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
