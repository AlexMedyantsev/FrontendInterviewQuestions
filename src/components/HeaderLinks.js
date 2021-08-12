import '../styles/index.scss'
import PropTypes from 'prop-types'

function HeaderLinks({children}) {
  return (
    <ul className="header__links">
      {children}
    </ul>
  );
}


HeaderLinks.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderLinks