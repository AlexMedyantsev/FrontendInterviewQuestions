import '../styles/header.scss';
import React from 'react'

function TrainingMainMenu({UIState, changeTrainingCardUIState}) {

  let generateArrayOfQuestionForTraining = () => {

  }

  let settingsClickHandler = () => {
    changeTrainingCardUIState('settings')
  }

  return (
    <React.Fragment>
      <button
        className="training__settings-btn"
        onClick={settingsClickHandler}>
      </button>
      <h1>Главное меню</h1>
    </React.Fragment>
  );
}

export default TrainingMainMenu;