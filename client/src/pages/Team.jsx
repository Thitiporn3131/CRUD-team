import React,{ useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"



function Team() {
    const [teams,setTeams]  = useState([]);

    useEffect(()=>{
        const fetchAllMembers = async () => {
            try{
                const res = await axios.get("http://localhost:8800/team")
                setTeams(res.data);

            }catch(err){
                console.log(err);

            }
        };
        fetchAllMembers()
    },[]);
    const handleDelete = async (id) => {
        try{
          await axios.delete(`http://localhost:8800/team/${id}`);
          window.location.reload()
        }catch(err){
          console.log(err);
        }
      }
  return (
    <div className='All'>
        <header className='nav'>
            <h1>Team</h1>
            <button className='addMember'><Link to="/add" >Add new Members</Link></button>
        </header>

        <div className='mid-container'>
           {teams.map((member) => (
            <div className='card'>
              <div className='team' key={member.id}>
                    <img src='https://cdn-icons-png.flaticon.com/512/4514/4514759.png'/>
                    <p className='team-name'>{member.name}<br></br><span>Position : {member.position}</span></p>
                    <p>{member.task}</p>
                    <p>
                      <button className='delete' onClick={()=> handleDelete(member.id)}>Delete</button>
                      <button className='update'><Link to={`/update/${member.id}`}>Update</Link></button>
                    </p>
                
              </div>
            </div>
           ))}
        </div>
        

    </div>
  )
}

export default Team
