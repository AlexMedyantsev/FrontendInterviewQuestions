import '../styles/index.scss';
import QuestionItem from './QuestionItem';
import {titleClickHandler} from "../utils/common.js";

function SectionList({ComponentToRender, arrayToRender, changeActiveQuestionSection}) {
  return (
    <ul className="section__list">
      {arrayToRender.map((item) => {
        return <ComponentToRender
          key={item.name}
          hasClickHandler={true}
          clickHandler={titleClickHandler}
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