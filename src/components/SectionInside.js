import '../styles/index.scss';
import '../styles/variables.scss';

function SectionInside({children, width, height}) {
  return (
    <div className="section__main">
      {children}
    </div>
  )
}

export default SectionInside;