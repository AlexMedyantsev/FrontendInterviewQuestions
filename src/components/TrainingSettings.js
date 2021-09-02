import '../styles/header.scss';
import React, {useEffect, useState} from 'react'
import Checkbox from "./Checkbox.js"
import {trainingCardQuestionTypes} from "../utils/const.js"

function TrainingSettings({
  changeTrainingCardUIState,
  addCallback,
  removeCallback
}) {

  const closeSettingsClickHandler = () => {
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
      <form className="form">
        <section className="form__section form__section--checkboxes">
          <legend className="form__legend">Выберите категории по которым будут заданы вопросы</legend>
          <div className="form__container">
            {trainingCardQuestionTypes.map((type) => {
              return <Checkbox
                value={type}
                addCallback={addCallback}
                removeCallback={removeCallback}
              />
            })}
          </div>
        </section>
        <section className="form__section">
          <label for="lname">Количество вопросов:</label>
          <input type="number" id="lname" name="lname" value="QuestionAmount" />
        </section>
      </form>
    </React.Fragment>
  );
}

export default TrainingSettings;