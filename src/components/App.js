import '../styles/index.scss';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import history from "../history.js";
import HomePage from "./HomePage.js"
import QuestionsPage from "./QuestionsPage.js";
import ProgressPage from "./ProgressPage.js";

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/">
          <HomePage
          />
        </Route>
        <Route exact path="/questions">
          <QuestionsPage
          />
        </Route>
        <Route exact path="/progress">
          <ProgressPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
