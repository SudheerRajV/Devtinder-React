import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full footer footer-center bg-base-200 text-base-content rounded p-6">
    {/* <nav className="grid grid-flow-col gap-4">
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> */}
    
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by DevTinder Industries Ltd</p>
    </aside>
  </footer>
  )
}

export default Footer