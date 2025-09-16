'use client'

import { useState } from "react";
import Image from "next/image";

import mainImage from "@/assets/icons/videoIcon.png";
import iconPlay from "@/assets/icons/icon-play-2.png";

export function CardVideo(){
    const[clickVideo, setClickVideo] = useState(false);


    function handleClick(){
        setClickVideo(true);
    }

   


    return(
          <button onClick={handleClick} className="w-full h-card-video relative overflow-hidden rounded-4xl group flex items-center justify-center mt-16">
                    <Image
                    src={mainImage}
                    alt="Imagem de Pessoas trabalhando"
                    title="Pessoas trabalhando"
                    className="transition-all ease-in-out duration-500 absolute group-[&:hover,&:focus]:scale-110 filter group-[&:hover,&:focus]:brightness-75 w-full h-full object-cover"
                    />
                    <div className="size-20 flex items-center justify-center transition-transform ease-linear bg-white absolute rounded-full group-[&:hover,&:focus]:scale-105">
                        <Image
                        src={iconPlay}
                        alt="Icone play"
                        title="Play"
                        />
                    </div>




                   {
                      clickVideo && (
                           <iframe 
                            src="https://www.youtube.com/embed/y6120QOlsfU?autoplay=1&si=axMqbSSb20fFVOG0" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="w-full h-full absolute"
                            />
                      )
                   }
          </button>
    )
}