import Image from "next/image";

import detail01 from "@/assets/icons/icon-detail-01.svg";
import detail02 from "@/assets/icons/bgdetail02.png";

import peopleImg from "@/assets/icon-people.png";

const imagesDetails = [
    {
        src:detail01,
        alt:"Imagem detalhe 01",
        position:"top-0 right-0 -z-20"
    },
    {
        src:detail02,
        alt:"Imagem detalhe 02",
        position:"bottom-0 left-0 -z-20"
    },
    {
        src:peopleImg,
        alt:"Imagem detalhe 03",
        position:"left-1/2 -translate-x-1/2 -z-10"
    }
]

export function BgDetails(){
    return(
           imagesDetails.map(({src,alt,position}) => (
               <Image
                 key={alt}
                 src={src}
                 alt={alt}
                 aria-hidden
                 className={`absolute ${position}`}
               />
           ))
    )
}