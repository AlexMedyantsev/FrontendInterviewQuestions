import '../styles/index.scss';

function SectionListContainer({children}) {
  return (
    <div className="question__list-container">
      {children}
    </div>
  )
}

export default SectionListContainer;