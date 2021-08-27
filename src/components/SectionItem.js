import '../styles/index.scss';
import React from "react";
import {motion} from "framer-motion";
import {questions} from "../utils/const.js"
import PropTypes from 'prop-types';
import Title from './Title.js';
import SubTitle from './SubTitle.js';
import QuestionContainer from './QuestionContainer.js';
import QuestionList from './QuestionList';

function SectionItem({mappedItem: {
  outsideTitleText,
  outsideTitleColor
},
  children, hideable, hideableTriggerProp, componentToRender}) {

  return (
    <motion.li
      className={outsideTitleText === hideableTriggerProp ? "section__item section__item--active" : 'section__item'}
      style={hideable ? outsideTitleText === hideableTriggerProp ? {display: 'flex'} : {display: 'none'} : {display: 'flex'}}
      whileHover={{
        scale: 1.00,
        transition: {duration: 0.2},
      }}
    >
      {/* Card outside */}
      <div className="section__item-inner-container section__item-inner-container--top">
        <Title
          titleText={outsideTitleText}
          titleColor={outsideTitleColor}
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
        {children &&
          React.cloneElement(children, {
            outsideTitleText: outsideTitleText,
            color: outsideTitleColor
          })}
      </div>

    </motion.li>
  );
}

SectionItem.propTypes = {
  item: PropTypes.shape({
    outsideTitleText: PropTypes.string,
    outsideTitleColor: PropTypes.string,
    insideTitleText: PropTypes.string,
    insideTitleColor: PropTypes.string,
  }),
  hideable: PropTypes.bool,
  hideableTriggerProp: PropTypes.string,
  hasClickHandler: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default SectionItem;