import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, RequestUsers } from '../utils/RequestSlice'
import { RootState } from '../utils/AppStore'
import RequestCard from './RequestCard'

const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector((state: RootState)=> state.requests.users)

    useEffect(()=>{
        fetchRequests()
      }, [])

      const fetchRequests = async () =>{
        const result = await axios.get('http://localhost:3000/user/requests', {withCredentials: true})
         console.log('result', result)
        if(result && result.data)
          dispatch(addRequests(result.data.data))
    }
        return (
          <div className='flex flex-col items-center'>
          <div className='text-2xl font-bold p-4'>Requests</div>
          {requests?.length===0 && <div className='text-2xl font-bold p-4'>No requests found</div>}
          {requests && requests.length >0 &&
          <div className='flex flex-col gap-2 w-full items-center'>
          {requests.map(((requests: RequestUsers)=>{
           return <RequestCard key = {requests._id} user={requests}/>
          }))}
          </div>
          }
          </div>
        )
      }

export default Requests