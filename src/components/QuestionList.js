import React from 'react'
import QuestionContainer from './QuestionContainer'
import PropTypes from 'prop-types';

function QuestionList({
  questions,
  width,
  color,
  hasAnswerButtons,
  hasShowAnswerButton,
  hasCardStateButtons,
  hasQuestionCount,
}) {
  return (
    <ul className="question__list">
      {questions.map((question) => {
        return <QuestionContainer
          key={question.questionTitle}
          question={question}
          width={width}
          color={color}
          hasQuestionCount={hasQuestionCount}
          hasAnswerButtons={hasAnswerButtons}
          hasShowAnswerButton={hasShowAnswerButton}
          hasCardStateButtons={hasCardStateButtons}
        />
      })}
    </ul>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  color: PropTypes.string,
  width: PropTypes.string.isRequired,
  hasAnswerButtons: PropTypes.bool.isRequired,
  hasShowAnswerButton: PropTypes.bool.isRequired,
  hasCardStateButtons: PropTypes.bool.isRequired,
  hasQuestionCount: PropTypes.bool.isRequired,
}

export default QuestionList