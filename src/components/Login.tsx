import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool} from '@hookform/devtools'
import  axios  from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/UserSlice'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../utils/Constants'

type loginFormValues =  {
  email: string,
  password: string
}
const Login = () => {

  const form = useForm<loginFormValues>()
  const {register, formState, handleSubmit, control} = form
  const {errors} = formState

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async(values: loginFormValues) => {
    //console.log('values', values)
    const result = await axios.post(BASE_URL+'/login', values, {withCredentials: true})
    console.log('result', result.data.user)
    if(result)
      dispatch(addUser(result.data.user))
    navigate('/feed')
  }
  return (
    // <div className="flex grow justify-center items-center">
    // <div className="card card-border bg-base-300 w-96 my-8">
    //   <div className="card-body">
    //     <h2 className="card-title">Login</h2>
    //   <label className="input input-bordered flex items-center gap-2 my-2">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 16 16"
    //       fill="currentColor"
    //       className="h-4 w-4 opacity-70">
    //       <path
    //         d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    //       <path
    //         d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    //     </svg>
    //     <input type="text" className="grow" placeholder="Email" />
    //   </label>
    //   <label className="input input-bordered flex items-center gap-2 my-2">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 16 16"
    //       fill="currentColor"
    //       className="h-4 w-4 opacity-70">
    //       <path
    //         fillRule="evenodd"
    //         d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
    //         clipRule="evenodd" />
    //     </svg>
    //     <input type="password" className="grow" placeholder="Password" />
    //   </label>
    //     <div className="card-actions justify-end my-2">
    //       <button className="btn btn-primary">Login</button>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div className="flex grow justify-center items-center">
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend className="fieldset-legend">Login</legend>
      <label className="fieldset-label">Email</label>
      <input type="email" className="input" placeholder="Email" {...register('email',{required: {value: true, message: "Email is required"}})}/>
      <p className='error'>{errors.email?.message}</p>
      <label className="fieldset-label">Password</label>
      <input type="password" className="input" placeholder="Password"  {...register('password',{required: {value: true, message: "Email is required"}})}/>
      <p className='error'>{errors.password?.message}</p>
      <button className="btn btn-primary mt-4" type='submit'>Submit</button>
      <div className='flex flex-row justify-end items-center gap-1'>
      <p>New User? </p>
      <button className="btn btn-link p-0" onClick={()=> navigate('/signup')}>Create Account.</button>
      </div>
    </fieldset>
    </form>
    <DevTool control = {control}/>
    </div>
  )
}

export default Login