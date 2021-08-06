import '../styles/index.scss';
import React from 'react';
import {motion} from "framer-motion";
import SmallTabInsideTitle from './SmallTabInsideTitle';


function SmallTab({hasClickHandler, clickHandler, titleText, titleColor, changeActiveQuestionSection, activeQuestionSection}) {
  return (
    <motion.li className="section__small"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      onClick={hasClickHandler === true ? () => clickHandler(titleText, changeActiveQuestionSection) : ''}
      style={titleText === activeQuestionSection ? {backgroundColor: titleColor} : {backgroundColor: 'white'}}
    >
      <SmallTabInsideTitle 
        titleText={titleText}
        titleColor={titleColor}
        activeQuestionSection={activeQuestionSection}
      />
    </motion.li>
  )
}

export default SmallTab;
