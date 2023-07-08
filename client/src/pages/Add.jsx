import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
    const [team,setTeam]  = useState({
        name:"",
        position:"",
        task:""
    });
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setTeam((prev) => ({
            ...prev,[e.target.name]:e.target.value
        }));
        console.log(team);
    }
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/team", team)
            navigate("/")
        }catch(err){
            console.log(err);
            setError(true)
        }
    }
  return (
    <div>
      <div className='form'>
        <h1>Add New Member</h1>
        <input type="text" placeholder="Name" onChange={handleChange} name="name" />
        <input type="text" placeholder="Position" onChange={handleChange} name="position" />
        <input type="text" placeholder="Task" onChange={handleChange} name="task" />

        <button className='formButton' onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default Add
