import React, { useEffect } from 'react'
import ConnectionCard from './ConnectionCard'
import { User } from '../utils/UserSlice'
import axios from 'axios'


const fetchConnections = async () =>{
    const result = await axios.get('http://localhost:3000/user/requests', {withCredentials: true})
    console.log('result', result)
}

const connections : User[] = [{
    id:  "123",
    firstName: "Sudheer",
    lastName: "Raj",
    email: "abc@abc.com",
    age: 20,
    gender: "Male",
    photo: "https://images.unsplash.com/photo-1738616445969-1fa474a5e28f?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: ['React']
}]



const Connections = () => {

useEffect(()=>{
  fetchConnections()
}, [])

  return (
    <div className='flex flex-col items-center'>
    <div className='text-2xl font-bold p-4'>Connections</div>
    <ConnectionCard user={connections[0]}/>
    </div>
  )
}

export default Connections
