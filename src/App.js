import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SearchPage" exact component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
