import React from 'react'
import {Link} from 'react-scroll'

function NavBar() {
  return (
    <div className='h-30 max-width-screen bg-[#AFCAD6] flex justify-between sticky top-0 z-50 shadow-[0_35px_40px_-15px_rgba(0,0,0,0.2)]'>
      <h1 className='text-white px-40 text-3xl font-bold p-4 cursor-pointer'><Link  to='home' spy={true} smooth={true}>Fetch.</Link></h1>
      <ul className=' hidden md:flex px-40'>
        <li className='p-4 font-semibold cursor-pointer text-xl text-white'><Link activeClass='active' to='home' spy={true} smooth={true}>Home</Link></li>
        <li className='p-4 font-semibold cursor-pointer text-xl text-white'><Link  to='about' spy={true} smooth={true}>About</Link></li>
        <li className='p-4 font-semibold cursor-pointer text-xl text-white'><Link  to='contact' spy={true} smooth={true}>Contact</Link></li>
        <li className='p-4 font-semibold cursor-pointer text-xl text-white'><Link  to='recruit' spy={true} smooth={true}>Join Us!</Link></li>
      </ul>
      </div>
  )
}

export default NavBar