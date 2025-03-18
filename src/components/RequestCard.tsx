import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeRequest, RequestUsers } from '../utils/RequestSlice'


type RequestProps = {
  user : RequestUsers
}

const RequestCard = (props: RequestProps) => {

  const {_id, fromUserId} = props.user


  const dispatch = useDispatch()

  const handleRequest= async(status: string) =>{
    const result = await axios.put('http://localhost:3000/request/review',{status, requestId: _id},{
    // headers:{
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
    //     'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
    // },
    withCredentials: true})
    if(result)
      dispatch(removeRequest(props.user))
  }
  return (
    <div className='flex flex-row bg-base-300 p-4 w-1/2 h-32 gap-4 rounded-2xl'>
      <div className='justify-center shrink-0'><img  className='h-20 w-20 rounded-full object-cover' src={fromUserId.photo} alt='photo'/></div>
      <div className='flex-grow basis-2'>
        <p>{fromUserId.firstName+" "+fromUserId.lastName}</p>
        <p>{fromUserId.email}</p>
        <p>{fromUserId.age+","+fromUserId.gender}</p>
        <p>{fromUserId.skills.toString()}</p>
        </div>
        <div className='flex flex-col gap-2 justify-end basis-1'>
        <button className="btn btn-primary" onClick={()=>handleRequest('accepted')}>Accept</button>
        <button className="btn btn-secondary" onClick={()=>handleRequest('rejected')}>Reject</button>
        </div>
    </div>
  )
}

export default RequestCard