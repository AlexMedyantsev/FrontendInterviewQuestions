import '../styles/index.scss';
import {titleClickHandler} from "../utils/common.js";
import PropTypes from 'prop-types';

function SectionList({ComponentToRender, arrayToRender, hideableTriggerProp, hideable}) {
  return (
    <ul className="section__list">
      {arrayToRender.map((item) => {
        return <ComponentToRender
          mappedItem={item}
          hideable={hideable}
          hideableTriggerProp={hideableTriggerProp}
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