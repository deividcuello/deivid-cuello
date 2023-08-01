import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className='container mx-auto min-h-screen pt-28 md:py-10 flex flex-col-reverse md:flex-row items-center justify-center gap-24 md:gap-0 md:justify-between text-primary px-2'>
        <div className='w-full' id='#'>
            <h2 className='text-7xl font-bold'>I'm Deivid Cuello</h2>
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "I'm a web developer",
                  1000,
                  "I'm a web full-stack",
                ]}
                wrapper="h4"
                speed={30}
                style={{ fontSize: '1.5rem', color: '#ffffff' }}
                repeat={Infinity}
              />
        </div>
        <div className='flex justify-center md:justify-end'>
            <img src="https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_1280.jpg" alt="Hero-Img" className='w-4/5 ring ring-offset-8 ring-offset-black ring-primary -rotate-12 md:mr-10'/>
        </div>
    </div>
  )
}

export default Hero