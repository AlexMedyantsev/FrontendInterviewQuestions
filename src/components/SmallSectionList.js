import '../styles/index.scss';
import '../styles/global/variables.scss';

function SmallSectionList({children}) {
  return (
    <ul className="section__small-list">
      {children}
    </ul>
  )
}

export default SmallSectionList;