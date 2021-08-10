import '../styles/index.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet({code, codeLanguage }) {
  return (
    <div className="code">
      <SyntaxHighlighter showLineNumbers={true} language={codeLanguage} customStyle={{padding: '0.8em', lineHeight: '27px', paddingTop: '1em'}} style={a11yDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet;