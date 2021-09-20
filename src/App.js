import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilList from "./Pages/ProfilList";
import ProfiDetails from "./Pages/ProfilDetails";
import Alert from "./components/alert/Alert";

import { useSelector } from "react-redux";
import NotFound from './components/NotFound';

function App() {


  return (
    <div>
      {/* <Alert /> */}
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home } />
            <Route path="/search-page" exact component={SearchPage} />
            <Route path="/prof-list" exact component={ProfilList} />
            <Route path="/detail-section" exact component={ProfiDetails} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
