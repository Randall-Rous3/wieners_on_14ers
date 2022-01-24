import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogCard from '../components/DogCard';
import AddDog from './Add_dog';
import { BASE_URL } from '../globals/index';







const MountainDogs = (props) => {
  let mountainDogArray = [];
  const [mountDog, setMountDogs] = useState(mountainDogArray);



  const getMountainDogs = async () => {
    const response = await axios.get(`http://${BASE_URL}/dogs`);
    setMountDogs(response.data.dogs);
   
  };

  useEffect(() => {
    getMountainDogs()
  }, []);
  



  return (
        <div><h1>Show All Dogs</h1>  
      
      <div className="dog-grid">
        {mountDog.map((dog) => (
        <DogCard
        key={dog.id}
        {...dog}
        name = {dog.name}
        image={dog.image}
        breed ={dog.breed}
        id = {dog._id}
        location = {dog.location}
        render ={getMountainDogs}
        />
        
      ))} 
    </div>
    </div>  
  );

}

export default MountainDogs