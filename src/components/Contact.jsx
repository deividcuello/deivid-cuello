import React from 'react'

function Contact() {
  return (
    <section className='px-2' id='contact'>
        <section className='container mx-auto text-primary'>
        <div className="section-title">
            <span>Get In Touch</span>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5 w-full mt-6'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-4xl text-center mb-3'>Contact me</h2>
                <form className='flex flex-col gap-2 flex-1'>
                    <input type="text" placeholder='Full name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message' className='resize-none'></textarea>
                    <input type="submit" value="Send" className='bg-primary text-black font-bold'/>
                </form>
            </div>
            <img src="https://cdn.pixabay.com/photo/2015/12/08/18/39/at-sign-1083508_640.png" alt="Contact-Img" className='w-44'/>
        </div>
        
    </section>
    </section>
  )
}

export default Contact