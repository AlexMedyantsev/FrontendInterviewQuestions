import '../styles/index.scss';
import PropTypes from 'prop-types'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function HeaderLink({children, linkTo, active}) {
  return (
    <Link to={linkTo} className={active ? "header__link header__link--active" : "header__link"}>
      <motion.li 
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.2},
        }}
        whileTap={{scale: 0.95}}>{children}</motion.li>
    </Link>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired, 
  active: PropTypes.bool.isRequired,
}

export default HeaderLink;