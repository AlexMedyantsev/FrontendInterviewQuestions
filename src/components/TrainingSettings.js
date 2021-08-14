import '../styles/header.scss';
import React from 'react'

function TrainingSettings({UIState, changeTrainingCardUIState}) {

  let generateArrayOfQuestionForTraining = () => {

  }

  let closeSettingsClickHandler = () => {
    changeTrainingCardUIState('mainMenu')
  }

  return (
    <React.Fragment>
      <button
        className="training__settings-btn"
        onClick={closeSettingsClickHandler}
      >
        Закрыть
      </button>
      <h1>Настройки</h1>
    </React.Fragment>
  );
}

export default TrainingSettings;