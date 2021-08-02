import '../styles/index.scss';
import '../styles/variables.scss';

function SectionInsideTitle({titleColor}) {
  return (
    <h2 className="section__inner-title" style={{color: titleColor}}>Повторите изученные вопросы</h2>
  )
}

export default SectionInsideTitle;