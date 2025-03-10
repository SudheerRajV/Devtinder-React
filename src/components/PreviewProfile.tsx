import React from 'react'
import { User } from '../utils/UserSlice'

export type ProfileProps = {
    user : User | null
}

const PreviewProfile = (props: ProfileProps) => {
  return (
    <div className="card bg-base-300 w-96 h-3/4 shadow-xl">
        <figure>
            <img
            src={props?.user?.photo}
            alt="Profile image" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props?.user?.firstName+' '+props?.user?.lastName}</h2>
            <p> {props?.user?.gender}, {props?.user?.age} </p>
            <p>Email: {props?.user?.email}</p>
            <p>Skills: {(props?.user?.skills)?.toString()}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Edit profile</button>
            </div>
        </div>
    </div>
  )
}

export default PreviewProfile