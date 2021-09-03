import '../styles/header.scss';
import React, {useEffect, useState} from 'react'
import Checkbox from "./Checkbox.js"
import {trainingCardQuestionTypes} from "../utils/const.js"
import Button from './Button';

function TrainingSettings({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestonAmount,
  addCallback,
  removeCallback
}) {
  const closeSettingsClickHandler = () => {
    changeTrainingCardUIState('mainMenu')
  }

  const questionAmountButtonClickhandler = (e) => {
    changeTrainingCardQuestonAmount(e.target.value)
  }

  return (
    <React.Fragment>
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
          <legend className="form__legend">Количество вопросов:</legend>
          <div onClick={questionAmountButtonClickhandler} className=''>
            <button
              className={trainingCard.settings.questionAmount === 5 ?
                "training__question-amount-btn training__question-amount-btn--active" :
                "training__question-amount-btn"
              }
            >
              5
            </button>
            <button
              className={trainingCard.settings.questionAmount === 10 ?
                "training__question-amount-btn training__question-amount-btn--active" :
                "training__question-amount-btn"
              }
            >
              10
            </button>
            <button
              className={trainingCard.settings.questionAmount === 15 ?
                "training__question-amount-btn training__question-amount-btn--active" :
                "training__question-amount-btn"
              }
            >
              15
            </button>
          </div>
        </section>
      </form>
      <Button
        callback={closeSettingsClickHandler}
        text={'Сохранить настройки'}
      />
    </React.Fragment>
  );
}

export default TrainingSettings;