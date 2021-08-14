import '../styles/index.scss';
import {Switch, Route, BrowserRouter} from "react-router-dom"
import {connect} from "react-redux";
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import history from "../history.js";
import HomePage from "./HomePage.js"
import QuestionsPage from "./QuestionsPage.js";

function App({
  activeQuestionSection,
  changeActiveQuestionSection,
  trainingCard,
  changeTrainingCardUIState
}) {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/">
          <HomePage
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
          />
        </Route>
        <Route exact path="/questions">
          <QuestionsPage
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
          />
        </Route>
        {/* <Route exact path="/">
          <ProgressPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    activeQuestionSection: state.UI.activeQuestionSection,
    trainingCard: state.UI.trainingCard,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeActiveQuestionSection: (section) => dispatch(ActionCreatorUI.changeActiveQuestionSection(section)),
    changeTrainingCardUIState: (state) => dispatch(ActionCreatorUI.changeTrainingCardUIState(state)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
