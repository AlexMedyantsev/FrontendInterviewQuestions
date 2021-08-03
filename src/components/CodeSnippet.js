import '../styles/index.scss';
import '../styles/variables.scss';

function CodeSnippet({children}) {
  return (
    <div className="code">
      {children}
    </div>
  )
}

export default CodeSnippet;