import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body