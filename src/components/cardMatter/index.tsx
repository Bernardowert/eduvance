import Image, { StaticImageData } from "next/image";


interface CardMatterProps{
     iconSrc:StaticImageData | string;
     iconAlt:string;
     title:string;
     description:string;   
}

export function CardMatter({iconSrc, iconAlt, title, description}:CardMatterProps){
    return(
        <div className="flex items-start gap-8 rounded-2xl bg-white tablet:p-6 laptop:h-40 desktop:h-cardMatter laptop:p-8 px-4 py-5">
               <div className="w-full max-w-14 h-14 flex items-center justify-center rounded-full bg-primary-50">
                   <Image
                    src={iconSrc}
                    alt={iconAlt}
                    title={iconAlt}
                   />
               </div>
               <div>
                    <h3 className="text-lg laptop:text-2xl font-semibold text-gray-900 mb-1.5">{title}</h3>
                    <p className="text-gray-800 laptop:text-lg">{description}</p>
               </div>
        </div>
    )
}