import '../styles/index.scss';
import PropTypes from 'prop-types';

function SectionListContainer({children}) {
  return (
    <div className="section__list-container">
      {children}
    </div>
  )
}

SectionListContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionListContainer;