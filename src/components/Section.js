import React from 'react';
import styled from 'styled-components';
import '../styles/variables.scss';


function Section({width, height, outsideTitle, titleColor, children}) {
  
  let removeQuotes = (string) => {
    return string.slice(1, -1);
  }

  const Span = styled.span`
  color: ${titleColor}`

  return (
    <section className="section" style={{width: width, height: height, }}>
      {outsideTitle && <Span className='section__title'>{outsideTitle}</Span>}
      {children}
    </section >
  )
}

export default Section;