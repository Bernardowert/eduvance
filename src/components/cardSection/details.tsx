import detail01 from "@/assets/icons/icon-detail01.png";
import detail02 from "@/assets/icons/icon-detail2.png";
import detail03 from "@/assets/icons/icon-detail03.png";
import detail04 from "@/assets/icons/icon-detail04.png";
import Image from "next/image";


const allDetails = [
    {
        src: detail01,
        alt: "Detalhe 01",
        className: "top-[96px] left-0"
    },
    {
        src: detail02,
        alt: "Detalhe 02",
        className: "top-[112px] right-0"
    },
    {
         src: detail03,
        alt: "Detalhe 03",
        className: "bottom-0 left-0"
    },
    {
         src: detail04,
        alt: "Detalhe 04",
        className: "bottom-[46px] right-0"
    }
]


export function Details(){
    return(
         allDetails.map(({src,alt, className}) => (
            <Image
             key={src + alt}
             src={src}
             alt={alt}
             aria-hidden
             className={`absolute ${className}`}
            />
         ))
    )
}