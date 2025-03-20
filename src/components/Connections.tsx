import React, { useEffect } from 'react'
import ConnectionCard from './ConnectionCard'
import { User } from '../utils/UserSlice'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/ConnectionSlice'
import { RootState } from '../utils/AppStore'
import { BASE_URL } from '../utils/Constants'

const Connections = () => {

  const dispatch = useDispatch()
  const connections = useSelector((state: RootState)=> state.connections.users)

  const fetchConnections = async () =>{
    const result = await axios.get(BASE_URL+'/user/connections', {withCredentials: true})
    // console.log('result', result)
    if(result && result.data)
      dispatch(addConnections(result.data.data))
}


useEffect(()=>{
  fetchConnections()
}, [])

  return (
    <div className='flex flex-col items-center'>
    <div className='text-2xl font-bold p-4'>Connections</div>
    {connections?.length===0 && <div className='text-2xl font-bold p-4'>No connections found</div>}
    {connections && connections.length >0 &&
    <div className='flex flex-col gap-2 w-full items-center'>
    {connections.map(((connection: User)=>{
     return <ConnectionCard key = {connection.id} user={connection}/>
    }))}
    </div>
    }
   
    </div>
  )
}

export default Connections

