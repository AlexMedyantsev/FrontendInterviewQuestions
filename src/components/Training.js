import '../styles/header.scss';

function Training(props) {
  return (
    <header className="header">
      {props.children}
    </header>
  );
}

export default Training;