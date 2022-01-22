import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogCard from '../components/DogCard';
import AddDog from './Add_dog';







const MountainDogs = (props) => {
  let mountainDogArray = [];
  const [mountDog, setMountDogs] = useState(mountainDogArray);



  const getMountainDogs = async () => {
    const response = await axios.get('http://localhost:3001/api/dogs');
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