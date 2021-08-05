import '../styles/index.scss';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function HeaderLink({children, linkTo}) {
  return (
    <Link to={linkTo} className="header__link">
      <motion.li 
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.2},
        }}
        whileTap={{scale: 0.95}}>{children}</motion.li>
    </Link>
  );
}

export default HeaderLink;