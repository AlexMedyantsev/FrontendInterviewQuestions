import '../styles/index.scss';
import '../styles/global/variables.scss';
import QuestionItem from './QuestionItem';
import {titleClickHandler} from "../utils/common.js";

function QuestionList({componentToRender, questions, changeActiveQuestionSection}) {
  return (
    <ul className="section__list">
      {questions.map((question) => {
        return <componentToRender
          key={question.name}
          hasClickHandler={true}
          changeActiveQuestionSection={changeActiveQuestionSection}
          clickHandler={titleClickHandler}
          ClickHandler={titleClickHandler}
          outsideTitleText={question.outsideTitleText}
          outsideTitleColor={question.outsideTitleColor}
          insideTitleText={question.insideTitleText}
          insideTitleColor={question.insideTitleColor}
        />
      })}
    </ul>
  )
}

export default QuestionList;