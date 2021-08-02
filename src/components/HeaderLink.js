import '../styles/App.scss';
import {motion} from "framer-motion";

function HeaderLink({children}) {
  return (
    <motion.li className="header__link"
      whileHover={{
        scale: 1.1,
        transition: {duration: 0.2},
      }}
      whileTap={{scale: 0.95}}>{children}</motion.li>
  );
}

export default HeaderLink;