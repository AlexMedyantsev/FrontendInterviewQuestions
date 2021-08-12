import '../styles/index.scss';
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet({code, codeLanguage }) {
  return (
    <div className="code">
      <SyntaxHighlighter showLineNumbers={true} wrapLongLines={true} language={codeLanguage} customStyle={{padding: '0.8em', fontSize: '13px', lineHeight: '27px', paddingTop: '1em'}} style={a11yDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  codeLanguage: PropTypes.string.isRequired,
}

export default CodeSnippet;