import React, { useState, useEffect, createElement } from 'react';
import axios from 'axios';
import MountainDogs from '../pages/Mountain_Dogs';
import { BASE_URL } from '../globals/index';







const DogCard = (props) => {

  const deleteDog = (e) =>{
    axios
      .delete(`${BASE_URL}/dogs/${props.id}`, )
      .then (props.render)
}


    return (
        <div>
            <h1>{props.name}</h1>
            <div className="Dog-card" onClick={props.onClick}>
              <img className='dogImg' src= {props.image} alt="Dog"/> <br/>
              <button className='delete' onClick={deleteDog}>delete </button>          
            <div className="info-wrapper flex-row space">
              <h3> date: {props.date}<br/> breed: {props.breed}  <br/> Mountain: {props.location}  </h3>
            </div>
            </div>
      </div>
    )
  }
  
  export default DogCard