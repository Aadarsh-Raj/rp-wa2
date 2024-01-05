import React from 'react'

function ActivityCardItem(prop) {
  return (
    <div className='activity-card-item card'>
      <h1><img src={prop.cardData.logo} alt="" /> {prop.cardData.heading}</h1>
      <p>
{prop.cardData.para}

</p>
    </div>
  )
}

export default ActivityCardItem
