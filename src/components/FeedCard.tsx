import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { FeedUser, removeFeed } from '../utils/FeedSlice'
import { BASE_URL } from '../utils/Constants'

type FeedProp = {
    user: FeedUser
}
const FeedCard = (prop: FeedProp) => {
    const {user} = prop
    const disptach = useDispatch()
    const handleRequest = async(status: string)=>{
        const values = {
            status: status,
            toUserId: user._id
        }
        console.log('FeedCard values', values)
        const result = await axios.put(BASE_URL+'/request/send', values, {withCredentials: true})
        console.log('FeedCard result', result)
        if(result)
            disptach(removeFeed(result.data.data))
    }
  return (
        <div className="card bg-base-300 w-92 h-2/3 shadow-sm">
        <figure>
            <img
            src={user.photo}
            alt="User image" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{user.firstName+" "+user.lastName}</h2>
            <p>{user.age+","+user.gender}</p>
            <p>{user.skills.toString()}</p>
            <div className="card-actions flex mt-3 justify-center">
            <button className="btn btn-primary w-32" onClick={()=> handleRequest('ignored')}>Ignore</button>
            <button className="btn btn-secondary w-32" onClick={()=> handleRequest('interested')}>Interested</button>
            </div>
        </div>
    </div>
  )
}

export default FeedCard