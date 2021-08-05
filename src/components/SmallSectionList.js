import '../styles/index.scss';


function SmallSectionList({arrayToRender, ComponentToRender,activeQuestionSection, changeActiveQuestionSection}) {
  return (
    <ul className="section__small-list">
      {arrayToRender.map((item) => {
        return <ComponentToRender
          key={item.name}
          hasClickHandler={true}
          clickHandler={changeActiveQuestionSection}
          activeQuestionSection={activeQuestionSection}
          titleText={item.outsideTitleText}
          titleColor={item.outsideTitleColor}
        />
      })}
    </ul>
  )
}

export default SmallSectionList;