import '../styles/index.scss';
import React from "react";
import {motion} from "framer-motion";
import PropTypes from 'prop-types';
import Title from './Title.js';
import styled from 'styled-components';
import SubTitle from './SubTitle.js';

const Li = styled(motion.li)`
width: ${props => props.width};
@media (max-width: 768px) {
  min-width: 100%;
}
@media (min-width: 768px) and (max-width: 1124px) {
  min-width: 100%;
}`;

function SectionItem({objectToRender: {
  outsideTitleText,
  outsideTitleColor,
  name,
},
  width,
  children
}) {

  return (
    <Li
      className={"section__item section__item--active"}
      width={width}
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
        {children &&
          React.cloneElement(children, {
            outsideTitleText: outsideTitleText,
            color: outsideTitleColor,
            language: name,
          })}
      </div>

    </Li>
  );
}

SectionItem.propTypes = {
  objectToRender: PropTypes.shape({
    outsideTitleText: PropTypes.string,
    outsideTitleColor: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
}

export default SectionItem;