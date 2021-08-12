import '../styles/index.scss';
import React from 'react';
import {motion} from "framer-motion";
import SmallTabInsideTitle from './SmallTabInsideTitle';


function SmallTab({mappedItem: {
  outsideTitleText,
  outsideTitleColor
},
  hasClickHandler, triggerProp, reduxCallback}) {

  let smallTabClickHandler = (titleText) => {
    reduxCallback(titleText);
  }

  return (
    <motion.li className="section__small"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      onClick={hasClickHandler ? () => smallTabClickHandler(outsideTitleText) : ''}
      style={outsideTitleText === triggerProp ? {backgroundColor: outsideTitleColor} : {backgroundColor: 'white'}}
    >
      <SmallTabInsideTitle
        titleText={outsideTitleText}
        titleColor={outsideTitleColor}
        triggerProp={triggerProp}
      />
    </motion.li>
  )
}

export default SmallTab;
