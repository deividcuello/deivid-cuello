import React from 'react'
import html5 from '../assets/images/html5.png'
import css3 from '../assets/images/css3.png'
import javascript from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import mongodb from '../assets/images/mongodb.png'
import mysql from '../assets/images/mysql.png'
import python from '../assets/images/python.png'

function Skills() {
  return (
    <section className='container mx-auto text-primary px-2' id='skills'>
        <div className="section-title mb-6">
            <span>My skills</span>
        </div>
        <div className='flex justify-center items-center gap-5 flex-wrap'>
            <div className='h-40 text-center bg-white p-7'>
                <img src={html5} alt="HTML5" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>HTML5</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={css3} alt="CSS3" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>CSS3</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={javascript} alt="Javascript" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>Javascript</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={react} alt="react" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>React</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={node} alt="node" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>Node</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={mongodb} alt="mongo" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>Mongo</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={mysql} alt="mysql" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>MySQL</span>
            </div>
            <div className='h-40 text-center bg-white p-7'>
                <img src={python} alt="python" className='object-cover h-full w-full'/>
                <span className='text-black font-bold text-2xl'>Python</span>
            </div>
        </div>
        
    </section>
  )
}

export default Skills