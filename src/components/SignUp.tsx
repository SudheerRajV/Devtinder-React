import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../utils/Constants'


type SignUpValues = {
  email: string,
  password: string
  firstName: string,
  lastName : string,
  gender:  string,
  age: string,
  photo?: string | null,
  skills?: string  | null,
}
const SignUp = () => {
    const form = useForm<SignUpValues>()
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}, watch} = form
    const onSubmit = async(values: SignUpValues)=>{
        //console.log('values',values)
        const result = await axios.post(BASE_URL+'/signup', values, {withCredentials: true})
        if(result)
            navigate('/login')
    }
  return (
    <div className="flex grow justify-center overflow-auto pt-32">
        <div >
        <form noValidate onSubmit={handleSubmit(onSubmit)} >
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Sign Up</legend>
        <label className="fieldset-label">First Name</label>
        <input type="text" className='input' placeholder='First Name' {...register('firstName', {required:{value: true, message: 'First Name required'}})}/>
        <p className='error'>{errors.firstName?.message}</p>
        <label className="fieldset-label">Last Name</label>
        <input type="text" className='input' placeholder='Last Name' {...register('lastName', {required:{value: true, message: 'Last Name required'}})}/>
        <p className='error'>{errors.lastName?.message}</p>
        <label className="fieldset-label">Email</label>
        <input type="email" className="input" placeholder="Email" {...register('email',{required: {value: true, message: "Email is required"}})}/>
        <p className='error'>{errors.email?.message}</p>
        <label className="fieldset-label">Password</label>
        <input type="password" className="input" placeholder="Password"  {...register('password',{required: {value: true, message: "Email is required"}})}/>
        <p className='error'>{errors.password?.message}</p>
        <label className="fieldset-label">Gender</label>
        <select defaultValue="Pick a gender" className="select" {...register('gender',{required: {value: true, message: "Gender is required"}})}>
        <option disabled={true}>Pick a gender</option>
        <option>Male</option>
        <option>Female</option>
        </select>
        <p className='error'>{errors.gender?.message}</p>
        <label className="fieldset-label">Photo</label>
        <input type="text" className="input" placeholder="Photo url"  {...register('photo')}/>
        <p className='error'>{errors.photo?.message}</p>
        <label className="fieldset-label">Skills</label>
        <textarea className="textarea textarea-xs" placeholder="eg: React, MongoDB, NodeJS" {...register('skills')}></textarea>
        <p className='error'>{errors.skills?.message}</p>
        <button className="btn btn-primary mt-4" type='submit'>Submit</button>
        <div className='flex flex-row justify-end items-center gap-1'>
        <p>Already have account? </p>
        <button className="btn btn-link p-0" onClick={()=> navigate('/login')}>login.</button>
        </div>
        </fieldset>
        </form>
        </div>
    </div>
  )
}

export default SignUp

