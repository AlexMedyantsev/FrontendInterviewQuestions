import React from 'react'
import QuestionContainer from './QuestionContainer'

function QuestionList({questions, color}) {
  return (
    <ul className="question__list">
      {questions.map((question) => {
        return <QuestionContainer
          key={question.questionTitle}
          question={question}
          color={color}
        />
      })}
    </ul>

  )
}

export default QuestionList