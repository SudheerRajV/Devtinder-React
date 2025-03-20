import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import axios, { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/AppStore'
import { addUser } from '../utils/UserSlice'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'

const Body = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user.info)
  const dispatch = useDispatch()
  const fetchUser = async() => {
    try{
      if(user) return;
      const result = await axios.get(BASE_URL+'/profile', {withCredentials: true})
     // console.log("result", result)
      dispatch(addUser(result.data.user))
      navigate('/feed')
    }catch(error: unknown){
      console.log('error', error)
        const e = error as AxiosError
        if(e.status === 401)
          navigate('/login')
        console.log('Error:', e.message)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div className='flex flex-col h-screen'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body