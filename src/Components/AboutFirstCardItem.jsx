import React from 'react'

function AboutFirstCardItem(prop) {
  return (
    <>
    <div className="about-first-card-item">
        <div className="logo-container">
<img src={prop.cardData.logo} alt="" />
          
        </div>
<div className="card-details-container">
  <h2>{prop.cardData.heading}</h2>
  <p>{prop.cardData.para}</p>
</div>
    </div>
    </>
  )
}

export default AboutFirstCardItem
