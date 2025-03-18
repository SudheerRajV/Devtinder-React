import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/AppStore'
import { addFeeds } from '../utils/FeedSlice'
import FeedCard from './FeedCard'

const Feed = () => {
  const dispatch = useDispatch()
  const feeds = useSelector((state: RootState) => state.feeds.users)
  
  const fetchFeeds =async()=>{
    const result = await axios.get('http://localhost:3000/user/feed',{params:{page: 1,limit: 2}, withCredentials: true})
    console.log('FeedCard result', result)
    if(result)
      dispatch(addFeeds(result.data.data))
  }
  useEffect(()=>{
    fetchFeeds()
  },[])
  return (
    <div className="flex grow justify-center items-center">
    {
    (feeds?.length === 0) ? <div className='text-2xl font-bold p-4'>No Feeds found</div> :
    feeds?.map((user)=> <FeedCard key={user._id} user= {user}/>)
    }
    </div>
  )
}

export default Feed