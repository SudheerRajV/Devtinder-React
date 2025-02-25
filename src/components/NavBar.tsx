import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../utils/AppStore'
import { Link } from 'react-router'
import { removeUser } from '../utils/UserSlice'
import axios from 'axios'

const NavBar = () => {
  const user = useSelector((state: RootState)=> state.user.info)
  const dispatch = useDispatch()
  const handleLogout = async() =>{
    try{
    dispatch(removeUser())
    await axios.get('http://localhost:3000/logout', {withCredentials:true})
    } catch(error: unknown){
      console.log('logout error: ', error)
    }
  }
  return (
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevTinder</a>
  </div>
  <div className="flex gap-2">
   { user && <div className="flex dropdown dropdown-end mx-4 justify-center items-center">
      <div className='mx-2'>Welcome {user.firstName}</div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to='/profile' className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><Link to='/login' onClick={handleLogout}>Logout</Link></li>
      </ul>
    </div>}
  </div>
</div>
  )
}

export default NavBar