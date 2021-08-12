import '../styles/index.scss';
import {titleClickHandler} from "../utils/common.js";

function SectionList({ComponentToRender, arrayToRender, hideableTriggerProp, hideable}) {
  return (
    <ul className="section__list">
      {arrayToRender.map((item) => {
        return <ComponentToRender
          mappedItem={item}
          hideable={hideable}
          hideableTriggerProp={hideableTriggerProp}
        />
      })}
    </ul>
  )
}

export default SectionList;