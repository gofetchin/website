import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div>
    <div className=' flex h-screen bg-[#92DDFA] text-center items-center justify-center' id='home'>
      <div>
      <h1 className='text-[100px] md:text-[400px] text-white font-bold drop-shadow-xl'>FETCH</h1>
        <div className='flex justify-center itmes-center'>
        <p className='md:text-5xl text-4xl text-xl font-bold text-white'> Fetch</p>
                <Typed className='md:text-5xl text-4xl text-xl font-bold pl-2 text-[#BE9471]' 
                strings={['Food', 'Groceries','Essentials', 'Clothes']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop/>
            </div>
            <br />
            <p className='md:text-3xl text-2xl font-bold text-[#545454]'>Get Essentials delivered in 20 minutes.*</p>
            </div>
      </div>
        
    </div>
  )
}

export default Hero