import '../styles/index.scss';
import '../styles/variables.scss';

function SectionInsideInfo({children}) {
  return (
    <div className="section__info">
      {children}
    </div>
  )
}

export default SectionInsideInfo;