import '../styles/index.scss';
import PropTypes from 'prop-types';

function SubTitle({
  subTitleText,
  subTitleColor,
}) {
  return (
    <span
      className="sub__title"
      style={{color: subTitleColor}}
    >
      {subTitleText}
    </span>
  )
}

SubTitle.propTypes = {
  subTitleText: PropTypes.string.isRequired,
  subTitleColor: PropTypes.string.isRequired,
}

export default SubTitle;