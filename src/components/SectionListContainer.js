import '../styles/index.scss';
import '../styles/global/variables.scss';

function SectionListContainer({children}) {
  return (
    <div className="question__list-container">
      {children}
    </div>
  )
}

export default SectionListContainer;