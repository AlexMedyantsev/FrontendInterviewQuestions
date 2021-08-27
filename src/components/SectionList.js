import '../styles/index.scss';
import {titleClickHandler} from "../utils/common.js";
import SectionItem from './SectionItem.js';
import PropTypes from 'prop-types';

function SectionList({
  children,
}) {

  return (
    <ul className="section__list">
      {children}
    </ul>
  )
}

SectionList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionList;