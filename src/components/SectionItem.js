import '../styles/index.scss';
import {motion} from "framer-motion";
import Title from './Title.js';
import SubTitle from './SubTitle.js';
import QuestionContainer from './QuestionContainer.js';
import {questions} from "../utils/const.js"
import QuestionList from './QuestionList';

function SectionItem({
  hasClickHandler,
  clickHandler,
  activeQuestionSection,
  changeActiveQuestionSection,
  outsideTitleText,
  outsideTitleColor,
  insideTitleText,
  insideTitleColor,
  hideable
}) {

  return (
    <motion.li
      className={outsideTitleText === activeQuestionSection ? "section__item section__item--active" : 'section__item'}
      style={hideable ? outsideTitleText === activeQuestionSection ? {display: 'flex'} : {display: 'none'} : {display: 'flex'}}
      whileHover={{
        scale: 1.00,
        transition: {duration: 0.2},
      }}
    >
      {/* Card outside */}
      <div className="section__item-inner-container section__item-inner-container--top">
        <Title
          hasClickHandler={hasClickHandler}
          clickHandler={clickHandler}
          titleText={outsideTitleText}
          titleColor={outsideTitleColor}
          reduxCallback={changeActiveQuestionSection}
        />
      </div>

      {/* Card inside */}
      <div className="section__item-inner-container section__item-inner-container--bottom">
        {/* <SubTitle
          hasClickHandler={hasClickHandler}
          clickHandler={clickHandler}
          subTitleText={insideTitleText}
          subTitleColor={insideTitleColor}
          reduxCallback={changeActiveQuestionSection}
        /> */}
        <QuestionList
          questions={questions.filter(question => question.type === outsideTitleText)}
          color={outsideTitleColor}
        />
      </div>

    </motion.li>
  );
}

export default SectionItem;