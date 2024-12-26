import Image from 'next/image'
import React from 'react'
// import ImageComponent from './Image'


const Hero = () => {
  return (
    <div className='w-full h-screen max-w-[1200px] bg-yellow-300 '>
      <div className='relative w-full h-full bg-black'>
        <Image
          src="/images2/hero2.jpg"
          alt="hero-image"
          width={300}
          height={300}
         
          className='w-full h-full object-cover'
        />
      
      </div>


    </div>
  )
}

export default Hero