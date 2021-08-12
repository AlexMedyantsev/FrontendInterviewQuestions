import '../styles/index.scss';
import PropTypes from 'prop-types';

function SmallTabList({arrayToRender, ComponentToRender, reduxCallback, triggerProp}) {
  return (
    <ul className="section__small-list" style={triggerProp ? {display: 'flex'} : {display: 'none'}}>
      {arrayToRender.map((item) => {
        return <ComponentToRender
          mappedItem={item}
          hasClickHandler={true}
          reduxCallback={reduxCallback}
          triggerProp={triggerProp}
        />
      })}
    </ul>
  )
}
SmallTabList.propTypes = {
  arrayToRender: PropTypes.array.isRequired, 
  componentToRender: PropTypes.func.isRequired, 
  triggerProp: PropTypes.string.isRequired,
  reduxCallback: PropTypes.func.isRequired
}


export default SmallTabList;