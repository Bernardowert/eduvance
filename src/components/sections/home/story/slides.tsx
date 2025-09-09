'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import ratingStar from "@/assets/icons/rating-story.png";
import avatar01 from "@/assets/icons/avatargirl-01.png";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { NavigationOptions } from 'swiper/types';



const testimonals = [
    {
        name:"Melinda Saymore",
        job:"Marketing Specialist",
        description:"Eduvance completely transformed how I approach learning. The courses are not just informative—they're interactive, well-structured, and incredibly engaging. Even with my full-time job, I was able to learn at my own pace."
    },
    {
        name:"Melinda Saymoress",
        job:"Job Interviewer",
        description:"Eduvance completely transformed how I approach learning. The courses are not just informative—they're interactive, well-structured, and incredibly engaging. Even with my full-time job, I was able to learn at my own pace."
    },
]


export function Slides(){

    const prevBtn = useRef(null);
    const nextBtn = useRef(null);
    return(
        <Swiper 
        navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current
        }}
        onBeforeInit={(swiper) => {
            const swiperParams = swiper.params.navigation as NavigationOptions;

            swiperParams.prevEl = prevBtn.current;
            swiperParams.nextEl = nextBtn.current;

        }}
        modules={[Navigation]} 
        className="w-full h-card-story bg-detail02 bg-no-repeat bg-bottom-left bg-white rounded-2xl relative mt-16">

            {
                testimonals.map(({name,job,description}) => (
                    <SwiperSlide key={name + job} className='!flex items-center justify-center flex-col px-28'>
                <Image
                src={ratingStar}
                alt='Icone estrela'
                title='estrela'
                />
                <p className='text-3xl text-gray-900 my-10 font-bold text-center'>{description}</p>
                <div>
                    <div className='w-full max-w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary-10 overflow-hidden'>
                        <Image
                        src={avatar01} 
                        alt='Icone usuario 01'
                        title='Usuario'
                        />
                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-2xl text-gray-900 font-semibold'>{name}</h3>
                        <p className='text-gray-800'>{job}</p>
                    </div>
               </div>

                    </SwiperSlide>
                ))
            }



            <div className='w-full max-w-[424px] absolute bottom-[110px] right-0 flex items-center justify-between left-1/2 translate-x-[-50%] z-10'>
                <button ref={prevBtn} className='w-12 h-12 flex items-center justify-center border border-primary-500 group rounded-full transition-colors [&:hover,&:focus]:bg-primary-500'>
                    <ArrowLeft size={24} className='text-primary-500 transition-colors group-hover:text-white'/>
                </button>
                <button ref={nextBtn} className='w-12 h-12 flex items-center justify-center border border-primary-500 group rounded-full transition-colors [&:hover,&:focus]:bg-primary-500'>
                    <ArrowRight size={24} className='text-primary-500 transition-colors group-hover:text-white'/>
                </button>
            </div>
      </Swiper>
    )
}