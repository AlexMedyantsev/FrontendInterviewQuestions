import '../styles/index.scss';

function App(props) {
  return (
    <main className="main">
      {props.children}
    </main>
  );
}

export default App;