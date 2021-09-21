import '../styles/header.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from "./Checkbox.js"
import {trainingCardQuestionTypes} from "../utils/const.js"
import {motion} from 'framer-motion'
import styled from 'styled-components';
import SquareButton from './SquareButton.js'

const squareButton = styled(motion.button)`
  
`

function TrainingSettings({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestionAmount,
  addCallback,
  removeCallback
}) {

  const closeSettingsClickHandler = () => {
    changeTrainingCardUIState('mainMenu')
  }

  const questionAmountButtonClickhandler = (number) => (e) => {
    e.preventDefault();
    changeTrainingCardQuestionAmount(number)
  }

  return (
    <React.Fragment>
      <form className="form">
        <section className="form__section form__section--checkboxes">
          <legend className="form__legend">Выберите категории по которым будут заданы вопросы</legend>
          <div className="form__container">
            {trainingCardQuestionTypes.map((type) => {
              return <div className="form__checkbox-wrapper">
                <Checkbox
                  key={type}
                  value={type}
                  array={trainingCard.settings.questionTypes}
                  addCallback={addCallback}
                  removeCallback={removeCallback}
                />
              </div>
            })}
          </div>
        </section>
        <section className="form__section">
          <legend className="form__legend">Количество вопросов:</legend>
          <div onClick={questionAmountButtonClickhandler} className=''>
            <SquareButton
              value={5}
              valueThatTriggersActiveClass={trainingCard.settings.questionAmount}
              callback={questionAmountButtonClickhandler}
            />
            <SquareButton
              value={10}
              valueThatTriggersActiveClass={trainingCard.settings.questionAmount}
              callback={questionAmountButtonClickhandler}
            />
            <SquareButton
              value={15}
              valueThatTriggersActiveClass={trainingCard.settings.questionAmount}
              callback={questionAmountButtonClickhandler}
            />
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
  changeTrainingCardQuestionAmount: PropTypes.func.isRequired,
  addCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
}

export default TrainingSettings;