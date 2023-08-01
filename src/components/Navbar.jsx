import React, { useState } from "react";

import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { AiFillProject } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';
import { GrPersonalComputer } from 'react-icons/gr';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false); 
  return (
    <header className=''>
        <div className='mx-auto flex justify-between items-center text-primary bg py-2 fixed top-0 w-full z-[100] bg-black px-2'>
            <div>
                <a href="#"><h1 className='text-2xl font-bold'>Deivid Cuello</h1></a>
            </div>
            <nav className='hidden md:flex gap-5 text-xl'>
                <a href="#" className='hover:text-white transition-colors'>Home</a>
                <a href="#about" className='hover:text-white transition-colors'>About</a>
                <a href="#skills" className='hover:text-white transition-colors'>Skills</a>
                <a href="#projects" className='hover:text-white transition-colors'>Projects</a>
                <a href="#contact" className='hover:text-white transition-colors'>Contact</a>
            </nav>
            <button onClick={() => setToggleMenu(prev => !prev)} className="text-xl block md:hidden"><AiOutlineMenu/></button>
        </div>
        { toggleMenu &&
          <nav className='flex md:hidden gap-5 text-xl bg-white fixed bottom-2 z-[99] left-1/2 -translate-x-1/2 py-2 px-3 rounded-3xl drop-shadow-lg'>
          <div>
            <a href="#"><AiFillHome/></a>
          </div>
          <div>
            <a href="#about"><SiAboutdotme/></a>
          </div>
          <div>
            <a href="#skills"><GrPersonalComputer/></a>
          </div>
          <div>
            <a href="#projects"><AiFillProject/></a>
          </div>
          <div>
            <a href="#contact"><AiFillContacts/></a>
          </div>
        </nav>
      }
    </header>
  )
}

export default Navbar