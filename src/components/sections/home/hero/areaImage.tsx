import Image from "next/image";


import girlImg from "@/assets/girl-hero-img.png";
import heroRate from "@/assets/images/hero/card-hero-rate.png";
import camIcon from "@/assets/images/hero/cam-icon.png";
import { CardUsers } from "./cardUsers";



const images = [
    {
        src: girlImg,
        alt: "Imagem de uma garota segurando livros",
        title: "Imagem ilustrativa de uma garota segurando livros",
        className: "h-full w-full object-contain desktop:w-auto desktop:h-auto"
    },
    {
        src: heroRate,
        alt: "Imagem de satisfação dos clientes",
        title: "Satisfação dos clientes",
        className: "desktop:top-[-58px] desktop:left-[-79px] top-[-18px] right-[-16px] max-w-40"
    },
    {
        src: camIcon,
        alt: "Icone de uma camera",
        title: "Camera",
        className: "top-[-19px] right-[-40px] hidden desktop:block"
    }
]
export function AreaImage(){
    return(
        <div className="w-full laptop:max-w-hero-areaText max-w-full laptop:h-hero-areaImage h-72 relative bg-primary-20 rounded-4xl flex items-center justify-center">
              {
                images.map(({src,alt,title,className}) => (
                    <Image
                     key={alt}
                     src={src}
                     alt={alt}
                     title={title}
                     loading="eager"
                     draggable={false}
                     quality={100}
                     className={`absolute ${className ? className : ""}`}
                    />
                ))
              }
             <CardUsers/>
        </div>
    )
}