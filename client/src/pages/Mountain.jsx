import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MountainCard from '../components/MountainCard';
import MountainDetails from './mountainDetails';
import { BASE_URL } from '../globals/index';







   



const Mountains = (props) => {
  let mountainsArray = [];
  const [mountains, setMountains] = useState(mountainsArray);
  const showMountains = (mountain) => {};



  const getMountains = async () => {
    const response = await axios.get(`http://${BASE_URL}/mountains`);
    setMountains(response.data.mountains);
  };
  mountains.sort((a, b) => a.name.localeCompare(b.name))

  
  useEffect(() => {
    getMountains();
  }, []);



  return (
    <div className="mountain-grid">
        {mountains.map((mountain) => (
        <MountainCard
          key={mountain.id}
          {...mountain}
          name = {mountain.name}
          image={mountain.image}
          id = {mountain._id}
          elevation = {mountain.elevation}
          onClick= {()=> props.history.push(`/mountains/details/${mountain._id}`)
        }
        />
      ))} 
      
     
    

    </div>
  );
  
} 

export default Mountains