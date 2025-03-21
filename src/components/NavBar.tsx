import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/AppStore'
import { Link } from 'react-router'
import { removeUser } from '../utils/UserSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/Constants'

const NavBar = () => {
  const user = useSelector((state: RootState)=> state.user.info)
  const dispatch = useDispatch()
  const handleLogout = async() =>{
    try{
    dispatch(removeUser())
    await axios.get(BASE_URL+'/logout', {withCredentials:true})
    } catch(error: unknown){
      console.log('logout error: ', error)
    }
  }
  return (
    <div className="fixed top-0 left-0 navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevTinder</a>
  </div>
  <div className="flex gap-2">
   { user && <div className="flex dropdown dropdown-end mx-4">
      <div className='mx-2 self-center'>Welcome {user.firstName}</div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile image"
            src={user.photo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li><Link to='/connections'>Connections</Link></li>
        <li><Link to='/requests'>Requests</Link></li>
        <li><a>Settings</a></li>
        <li><Link to='/login' onClick={handleLogout}>Logout</Link></li>
      </ul>
    </div>}
  </div>
</div>
  )
}

export default NavBar