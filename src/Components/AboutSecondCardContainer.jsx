import React from 'react'
import ScrollBar from './Scrollbar'

function AboutSecondCardContainer(prop) {
  return (
    <div className="about-second-card-item card">
        <h3>{prop.cardData.language} {prop.cardData.percentage}</h3>
        <ScrollBar percentage={prop.cardData.percentage}/>
    </div>
  )
}

export default AboutSecondCardContainer
