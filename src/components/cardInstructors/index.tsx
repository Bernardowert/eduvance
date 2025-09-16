import Image, { StaticImageData } from "next/image";




interface CardInstructorProps{
    imgSrc: string | StaticImageData;
    imgAlt: string;
    name:string;
    job:string;
}

export function CardInstructor({imgSrc, imgAlt, name, job}:CardInstructorProps){
    return(
        <div>
               <div className="h-52 bg-primary-50 rounded-2xl overflow-hidden w-full desktop:h-card-instructor mb-4">
                    <Image
                     src={imgSrc}
                     alt={imgAlt}
                     title={imgAlt}
                     className="w-full h-full object-cover tablet:object-contain"
                    />
               </div>
               <div>
                   <h3 className="text-lg desktop:text-2xl font-bold text-primary-500 mb-2">{name}</h3>
                   <p className="text-sm text-gray-800 desktop:text-lg">{job}</p>
               </div>
        </div>
    )
}