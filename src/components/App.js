import '../styles/App.scss';
import {Switch, Route, Router} from "react-router-dom";
import history from "../history.js";
import HomePage from "./HomePage.js"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
