import '../styles/header.scss';

function Header(props) {
  return (
    <header className="header">
      {props.children}
    </header>
  );
}

export default Header;