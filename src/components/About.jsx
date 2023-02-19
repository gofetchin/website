import React from 'react'
// import Tb from '../assets/tb.svg'
import St from '../assets/sticky_note.png'
import App from '../assets/app.png'

function About() {
  return (
    <div className='bg-[#92ddfa] md:h-screen h-full p-[100px] md:flex justify-between items-center' id='about'>
      <div>
      <img src={St} alt="Sticky Note" className='md:scale-125 drop-shadow-xl scale-150'/>
      </div>
      <div>
        <h1 className='md:text-[71.3px] text-[30px] text-[#545454] font-bold'>Ever Wanted</h1>
        <h1 className='md:text-[41.7px] text-[15px] text-[#545454] font-bold'>an errand boy of your own?</h1>
        <h1 className='md:text-[72.1px] text-[34px] text-[#545454] font-bold'>Get <span className='text-[#D13123] font-bold'>Access</span></h1>
        <h1 className='md:text-[37.7px] text-[14px] text-[#545454] font-bold'>to any store in your city</h1>
        <h1 className='md:text-[82.2px] text-[40px] text-[#545454] font-bold'>in a JIFFY!</h1>
      </div>
      <div>
      <img src={App} alt="App" className='scale-125 drop-shadow-xl'/>
      </div>
    </div>
  )
}

export default About