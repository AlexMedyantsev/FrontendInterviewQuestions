import '../styles/header.scss';
import React from 'react'
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox.js"
import {trainingCardQuestionTypes} from "../utils/const.js"

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

  const questionAmountButtonClickhandler = (number) => (e) => {
    e.preventDefault();
    changeTrainingCardQuestonAmount(number)
  }

  return (
    <React.Fragment>
      <form className="form">
        <section className="form__section form__section--checkboxes">
          <legend className="form__legend">Выберите категории по которым будут заданы вопросы</legend>
          <div className="form__container">
            {trainingCardQuestionTypes.map((type) => {
              return <Checkbox
                key={type}
                value={type}
                array={trainingCard.settings.questionTypes}
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
              onClick={(e) => questionAmountButtonClickhandler(5)(e)}
            >
              5
            </button>
            <button
              className={trainingCard.settings.questionAmount === 10 ?
                "training__question-amount-btn training__question-amount-btn--active" :
                "training__question-amount-btn"
              }
              onClick={(e) => questionAmountButtonClickhandler(10)(e)}
            >
              10
            </button>
            <button
              className={trainingCard.settings.questionAmount === 15 ?
                "training__question-amount-btn training__question-amount-btn--active" :
                "training__question-amount-btn"
              }
              onClick={(e) => questionAmountButtonClickhandler(15)(e)}
            >
              15
            </button>
          </div>
        </section>
      </form>
    </React.Fragment>
  );
}

TrainingSettings.propTypes = {
  trainingCard: PropTypes.shape({
    UIState: PropTypes.string.isRequired,
    settings: PropTypes.shape({
      questionTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
      questionAmount: PropTypes.number.isRequired,
    }),
    questions: PropTypes.array.isRequired,
    activeQuestionIndex: PropTypes.number.isRequired
  }),
  changeTrainingCardUIState: PropTypes.func.isRequired,
  changeTrainingCardQuestonAmount: PropTypes.func.isRequired,
  addCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
}

export default TrainingSettings;