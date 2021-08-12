import '../styles/index.scss';
import PropTypes from 'prop-types'

function Main({children}) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main;