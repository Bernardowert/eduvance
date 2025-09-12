import icon01 from "@/assets/icons/icon-matter-01.png";
import Image, { StaticImageData } from "next/image";


interface CardMatterProps{
     iconSrc:StaticImageData | string;
     iconAlt:string;
     title:string;
     description:string;   
}

export function CardMatter({iconSrc, iconAlt, title, description}:CardMatterProps){
    return(
        <div className="flex items-start gap-8 rounded-2xl bg-white h-cardMatter w-full max-w-[400px] p-8">
               <div className="w-full max-w-14 h-14 flex items-center justify-center rounded-full bg-primary-50">
                   <Image
                    src={iconSrc}
                    alt={iconAlt}
                    title={iconAlt}
                   />
               </div>
               <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-gray-800 text-lg">{description}</p>
               </div>
        </div>
    )
}