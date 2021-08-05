import '../styles/index.scss';

function HeaderLinks({children}) {
  return (
    <ul className="header__links">
      {children}
    </ul>
  );
}

export default HeaderLinks;