import '../styles/index.scss';


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

export default SmallTabList;