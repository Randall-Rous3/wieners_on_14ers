import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MountainCard from '../components/MountainCard';





   



const MountainDetails = (props) => {
  let detailsArray = [];
  const [mountainDetails, setMountainDetails] = useState(detailsArray);
  const [returnId, setReturnId] = useState(props.match.params.mountainId);
  const [updatedMount, setUpdatedMount] = useState({
    name:'',
    elevation:'',
    range:'',
    coordinates:'',
    description:''
  });
  const updateMount = (e) =>{
    e.preventDefault();
    const newMount = {
      ...updatedMount
    };
    axios
      .put(`http://localhost:3001/api/mountains/update/${props.match.params.mountainId}`, newMount)
      .then((response) => setReturnId(response.data))
        setUpdatedMount({
         description:''
    });
}


const handleChange = (e) => {
    setUpdatedMount({ ...updatedMount, [e.target.name]: e.target.value });
   
  };
const handleSubmit = (e) => {
   updateMount(e)
   getDetails(e)
};

const getDetails = async (mountain) => {
    const response = await axios.get(`http://localhost:3001/api/mountains/${props.match.params.mountainId}`);
        setMountainDetails(response.data.mountain);
  };


  useEffect(() => {
    getDetails();
  }, []);
  
 

return (
<div >
    <h1> {mountainDetails.name} </h1>
    <div className= "details">
        <h3> Range: {mountainDetails.range} <br/> Elevation: {mountainDetails.elevation}<br/> {mountainDetails.coordinates}<br/> {mountainDetails.description}</h3>
        < img className = "mountPic" src = {mountainDetails.image} alt={mountainDetails.name}/>
        <form className='form' onSubmit={handleSubmit}>
       
        <input
          type="text"
          value={updatedMount.name}
          onChange={handleChange}
          name={'name'}
          placeholder={mountainDetails.name}
        />
        <input
        type="text"
        value={updatedMount.range}
        onChange={handleChange}
        name={'range'}
        placeholder={mountainDetails.range}
      />
        <input
          type="text"
          value={updatedMount.elevation}
          onChange={handleChange}
          name={'elevation'}
          placeholder={mountainDetails.elevation}
        />
        <input
          type="text"
          value={updatedMount.coordinates}
          onChange={handleChange}
          name={'coordinates'}
          placeholder={mountainDetails.coordinates}
        />

        <input
            type="text"
            value={updatedMount.description}
            onChange={handleChange}
            name={'description'}
            placeholder={'mountain desription'}
        />
        <button type="submit">Edit</button>

        </form>
    </div>
  
       
</div>
)
}

export default MountainDetails