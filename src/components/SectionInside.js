import '../styles/index.scss';
import '../styles/variables.scss';

function SectionInside({children, width, height}) {
  return (
    <div className="section__main" style={{width: width, height: height}}>
      {children}
    </div>
  )
}

export default SectionInside;