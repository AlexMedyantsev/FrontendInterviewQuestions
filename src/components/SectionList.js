import '../styles/index.scss';
import QuestionItem from './QuestionItem';
import {titleClickHandler} from "../utils/common.js";

function SectionList({ComponentToRender, arrayToRender, activeQuestionSection, changeActiveQuestionSection, hideable}) {
  return (
    <ul className="section__list">
      {arrayToRender.map((item) => {
        return <ComponentToRender
          key={item.name}
          hideable={hideable}
          hasClickHandler={true}
          clickHandler={titleClickHandler}
          activeQuestionSection={activeQuestionSection}
          changeActiveQuestionSection={changeActiveQuestionSection}
          outsideTitleText={item.outsideTitleText}
          outsideTitleColor={item.outsideTitleColor}
          insideTitleText={item.insideTitleText}
          insideTitleColor={item.insideTitleColor}
        />
      })}
    </ul>
  )
}

export default SectionList;