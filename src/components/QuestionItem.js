import '../styles/index.scss';
import {motion} from "framer-motion";
import Title from './Title.js';
import SubTitle from './SubTitle.js';

function QuestionItem({
  hasClickHandler,
  clickHandler,
  changeActiveQuestionSection,
  outsideTitleText,
  outsideTitleColor,
  insideTitleText,
  insideTitleColor
}) {

  return (
    <motion.li className="question__item"
      whileHover={{
        scale: 1.1,
        transition: {duration: 0.2},
      }}
      whileTap={{scale: 0.95}}
    >

      <div className="question__item-inner-container question__item-inner-container--top">
        <Title
          hasClickHandler={hasClickHandler}
          clickHandler={clickHandler}
          titleText={outsideTitleText}
          titleColor={outsideTitleColor}
          reduxCallback={changeActiveQuestionSection}
        />
      </div>

      <div className="question__item-inner-container question__item-inner-container--bottom">
        <SubTitle
          hasClickHandler={hasClickHandler}
          clickHandler={clickHandler}
          subTitleText={insideTitleText}
          subTitleColor={insideTitleColor}
          reduxCallback={changeActiveQuestionSection}
        />
      </div>

    </motion.li>
  );
}

export default QuestionItem;