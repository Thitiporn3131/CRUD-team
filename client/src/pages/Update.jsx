import React, {useState} from 'react'
import axios from 'axios'
import { useLocation , useNavigate} from 'react-router-dom';


function Update() {
  const [team,setTeam]  = useState({
    name:"",
    position:"",
    task:""
  });
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const teamId = location.pathname.split("/")[2];

  const handleChange = (e) => {
      setTeam((prev) => ({
          ...prev,[e.target.name]:e.target.value
      }));
      console.log(team);
  };
  const handleClick = async e => {
      e.preventDefault()
      try{
          await axios.put(`http://localhost:8800/team/${teamId}`,team);
          navigate("/");
      }catch(err){
          console.log(err);
          setError(true);
      }
    }
  return (
    <div className='form'>
      <h1>Update Data</h1>
        <input type='text' placeholder='name' onChange={handleChange} name='name'/>
        <input type='text' placeholder='position' onChange={handleChange} name='position'/>
        <input type='text' placeholder='task' onChange={handleChange} name='task'/>
        {error && "Something went wrong!"}
        <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update
