import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'
import project7 from '../assets/images/project7.png'
import project8 from '../assets/images/project8.png'


function Projects() {
  return (
    <section className='container mx-auto text-primary px-2' id='projects'>
    <div className="section-title mb-8">
        <span>My projects</span>
    </div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div>
                <img src={project1} alt="project1" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project2} alt="project2" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project3} alt="project3" className='h-44'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project4} alt="project4" className='h-44'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project5} alt="project5" className='h-44'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project6} alt="project6" className='h-44'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project7} alt="project7" className='h-44'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={project8} alt="project8" className='h-44'/>
            </div>
        </SwiperSlide>

    </Swiper>
    
</section>
  )
}

export default Projects