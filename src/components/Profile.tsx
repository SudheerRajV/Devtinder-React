import React from 'react'
import PreviewProfile from './PreviewProfile'
import ProfileForm from './ProfileForm'
import { useSelector } from 'react-redux'
import { RootState } from '../utils/AppStore'

const Profile = () => {
  const user = useSelector((state: RootState)=> state.user.info)
  return (
    <div className='flex grow justify-center items-center gap-x-8'>
        <PreviewProfile user={user}/>
        <ProfileForm user = {user}/>
    </div>
  )
}

export default Profile