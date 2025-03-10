import { useForm } from 'react-hook-form'
import { addUser, User } from '../utils/UserSlice'
import { ProfileProps } from './PreviewProfile'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RootState } from '../utils/AppStore'
import axios from 'axios'

const ProfileForm = (props: ProfileProps) => {
  const form = useForm<User>( {defaultValues: {
    firstName: props?.user?.firstName,
    lastName: props?.user?.lastName,
    age: props?.user?.age,
    skills: props?.user?.skills,
    photo: props?.user?.photo,
    gender: props?.user?.gender
  }})
  const {register, formState, handleSubmit, watch} = form
  const {errors} = formState
  //const watchForm = watch()
  const dispatch = useDispatch()

  const onSaveProfile = async(values: User)=>{
    console.log('values', values)
    const result = await axios.post('http://localhost:3000/profile/edit',values, {withCredentials: true})
    console.log('result', result)
    if(result){
      //console.log('result.data.user', result)
       dispatch(addUser(result.data.user))
    }
  }

  useEffect(()=>{
   //console.log('watchForm', watchForm)
   const subscrption  = watch((user)=>{
    const skills  = user?.skills?.toString().split(",") || []
    return dispatch(addUser({...user, skills: skills}))
   })

   return () => subscrption.unsubscribe();
  }, [watch,dispatch])

  return (
  <div>
  <form noValidate onSubmit={handleSubmit(onSaveProfile)}>
  <fieldset className="fieldset w-96 h-fit bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Profile</legend>

  <label className="fieldset-label">First Name</label>
  <input type="text" className="input" placeholder="First Name" {...register('firstName', {required: {value: true, message: "First Name is required"}})}/>
  <p className="validator-hint">{errors?.firstName?.message}</p>

  <label className="fieldset-label">Last Name</label>
  <input type="text" className="input" placeholder="Last Name" {...register('lastName', {required: {value: true, message: "Last Name is required"}})}/>
  <p className="validator-hint">{errors?.lastName?.message}</p>

  <label className="fieldset-label">Photo</label>
  <input type="text" className="input" placeholder="http://example.com/example.png"  {...register('photo', {required: {value: true, message: "Photo is required"}})}/>
  <p className="validator-hint">{errors?.photo?.message}</p>

  <label className="fieldset-label">Age</label>
  <input type="number" className="input" placeholder="Age" {...register('age', {required: {value: true, message: "Age is required"}})}/>
  <p className="validator-hint">{errors?.age?.message}</p>

  <label className="fieldset-label">Gender</label>
  <select className="select" {...register('gender', {required: {value: true, message: "Gender is required"}})}>
    <option>Male</option>
    <option>Female</option>
  </select>

  {/* <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" disabled/> */}
  
  <legend className="fieldset-label">Skills</legend>
  <textarea className="textarea h-24" placeholder="Skills"{...register('skills', {required: {value: true, message: "Photo is required"}})}></textarea>
  <p className="validator-hint">{errors?.skills?.message}</p>

  <button className="btn btn-secondary mt-4" type='submit'>Save Profile</button>
</fieldset>
</form>
</div>
  )
}

export default ProfileForm