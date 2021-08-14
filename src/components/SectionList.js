import '../styles/index.scss';
import {titleClickHandler} from "../utils/common.js";
import SectionItem from './SectionItem.js';
import PropTypes from 'prop-types';

function SectionList({children, ComponentToRender, arrayToRender, hideableTriggerProp, hideable}) {
  return (
    <ul className="section__list">
      {arrayToRender.map((item) => {
        return <SectionItem
          ComponentToRender={ComponentToRender}
          mappedItem={item}
          hideable={hideable}
          hideableTriggerProp={hideableTriggerProp}
          children={children}
        />
      })}
    </ul>
  )
}

SectionList.propTypes = {
  ComponentToRender: PropTypes.func.isRequired,
  arrayToRender: PropTypes.array.isRequired,
  hideableTriggerProp: PropTypes.string.isRequired,
  hideable: PropTypes.bool.isRequired,
}

export default SectionList;