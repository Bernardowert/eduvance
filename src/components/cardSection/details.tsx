import detail01 from "@/assets/icons/icon-detail01.png";
import detail02 from "@/assets/icons/icon-detail2.png";
import detail03 from "@/assets/icons/icon-detail03.png";
import detail04 from "@/assets/icons/icon-detail04.png";
import Image from "next/image";


const allDetails = [
    {
        src: detail01,
        alt: "Detalhe 01",
        className: "top-[96px] laptop:left-0 max-w-20 left-[-31px] rotate-[32deg] laptop:rotate-0 laptop:max-w-full"
    },
    {
        src: detail02,
        alt: "Detalhe 02",
        className: "laptop:top-[112px] top-[80px] right-0 max-w-20 laptop:max-w-full"
    },
    {
         src: detail03,
        alt: "Detalhe 03",
        className: "laptop:bottom-[-83px] laptop:left-[-71px] max-w-40 left-[-50px] bottom-[-63px] laptop:max-w-full"
    },
    {
         src: detail04,
        alt: "Detalhe 04",
        className: "bottom-[46px] laptop:right-0 laptop:max-w-full laptop:rotate-0 max-w-20 rotate-[23deg] right-[-18px]"
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
             className={`absolute tablet:max-w-24 -z-10 ${className}`}
            />
         ))
    )
}