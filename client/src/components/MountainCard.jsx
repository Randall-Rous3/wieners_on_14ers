import React from 'react'

const MountainCard = (props) => {
  
  return (
      
    <div className="mounatain-card" onClick={props.onClick}>
        <img className = 'img' src={props.image} alt="Game"/> 
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
      </div>
    </div>
    
  )
}

export default MountainCard