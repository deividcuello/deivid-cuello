import React from 'react'
import smile from '../assets/images/smile.webp'

function About() {
  return (
    <section className='container mx-auto text-primary px-2' id='about'>
        <div className="section-title">
            <span>About me</span>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div className='text-white w-full md:w-3/5 mt-4 text-center text-xl'>
                <p>My journey as a web developer began with an insatiable curiosity for technology and a love for crafting digital experiences. I embarked on this path to turn my passion into a profession, and I haven't looked back since. Over the years, I've honed my skills, continually seeking new challenges and pushing the boundaries of what's possible.</p><br/>
                <p>I'm excited to connect with fellow developers, entrepreneurs, and businesses that share a passion for innovation and excellence. If you have an exciting project or an idea you'd like to bring to life, feel free to get in touch. I'm always up for a new adventure and the opportunity to create something extraordinary together.</p>
            </div>
            <div>
                <img src={smile} alt="About-Img" className='w-40 hidden md:block' />
            </div>
        </div>
        
    </section>
  )
}

export default About