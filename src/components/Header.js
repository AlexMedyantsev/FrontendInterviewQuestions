import '../styles/header.scss';
import PropTypes from 'prop-types'

function Header({children}) {
  return (
    <header className="header">
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header;