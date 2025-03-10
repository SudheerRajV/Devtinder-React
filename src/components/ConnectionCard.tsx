import React from 'react'
import { User } from '../utils/UserSlice'

type ConnectionProps = {
  user : User
}
const ConnectionCard = (props: ConnectionProps) => {
  return (
    <div className='flex flex-row bg-base-300 p-4 w-1/2 h-32 gap-4 rounded-2xl'>
      <div className='justify-center'><img  className='h-20 w-20 rounded-full object-cover' src={props.user.photo} alt='photo'/></div>
      <div>
        <p>{props.user.firstName+" "+props.user.lastName}</p>
        <p>{props.user.email}</p>
        <p>{props.user.age+","+props.user.gender}</p>
        <p>{props.user.skills.toString()}</p>
        </div>
    </div>
  )
}

export default ConnectionCard