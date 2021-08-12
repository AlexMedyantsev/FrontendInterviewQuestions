import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

function SmallTabListContainer({children, triggerProp}) {
  return (
    <div className={`small__section-container${triggerProp ? "--visible" : ""}`}>
      {children}
    </div>
  )
}

SmallTabListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  triggerProp: PropTypes.string.isRequired
}

export default SmallTabListContainer;