import '../styles/header.scss';
import "../styles/global/variables.scss"
import React, {useState} from 'react';
import QuestionList from "./QuestionList.js";
import QuestionContainer from "./QuestionContainer.js";

function TrainingQuiz({TrainingCard, changeTrainingCardUIState, arrayOfQuestionsForTraining}) {
  const [activeTrainingQuestion, changeActiveTrainingQuestion ] = useState(arrayOfQuestionsForTraining[0])
  return (
    <React.Fragment>
      <QuestionContainer
        question={activeTrainingQuestion}
        color={'red'}
      />
    </React.Fragment>
  );
}

export default TrainingQuiz;