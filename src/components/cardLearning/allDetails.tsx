import Image from "next/image";


import iconArrowRight from "@/assets/icons/arrow-left-down-yellow.svg";
import iconArrowLeft from "@/assets/icons/arrow-right-up-yellow.svg";
import iconDetail01 from "@/assets/icons/icon-detail-plataform-01.png";
import iconDetail02 from "@/assets/icons/icon-detail-plataform-02.png";

const allImages = [
    {
        src:iconArrowRight,
        alt:"Icone seta detalhe 01",
        className:"bottom-0 left-0 max-w-28 tablet:max-w-full"
    },
    {
        src:iconArrowLeft,
        alt:"Icone seta detalhe 02",
        className:"top-0 right-0 max-w-28 tablet:max-w-full"
    },
    {
        src:iconDetail01,
        alt:"Icone seta detalhe 03",
        className:"top-[34px] left-[24px] max-w-14 tablet:max-w-full desktop:top-[87px] desktop:left-[22%]"
    },
    {
        src:iconDetail02,
        alt:"Icone seta detalhe 04",
        className:"bottom-[65px] right-[27px] max-w-10 tablet:max-w-full desktop:bottom-28 desktop:right-[22%]"
    }
]

export function AllDetails(){
    return(
          allImages.map(({src,alt, className}) => (
              <Image
               src={src}
               alt={alt}
               key={src + alt}
               aria-hidden
               draggable={false}
               className={`absolute ${className}`}
              />
          ))
    )
}