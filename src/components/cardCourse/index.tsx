import Image, { StaticImageData } from "next/image";
import { SubTitle } from "../subtitle";
import { Button } from "../button";

import iconBook from "@/assets/icons/menu_book.png";
import iconClock from "@/assets/icons/clock-icon.png";
import iconPerson from "@/assets/icons/person-icon.png";

interface CardProps{
    subtitle:string;
    title:string;
    description:string;
    listingIcons:string[];
    btnText:string;
    btnHref?:string;
    value:string;
    imageSrc:string | StaticImageData;
    imageAlt:string;
    imageTitle:string;
    rating:string;
    areaImage:string | StaticImageData;
    areaImageAlt:string;
    areaImageTitle:string;
}


const icons = [
    {
        iconSrc:iconBook,
        iconAlt:"Icone de um livro",
        iconTitle:"Livro",
    },
    {
        iconSrc:iconClock,
        iconAlt:"Icone de um relogio",
        iconTitle:"Relogio",
    },
    {
      iconSrc:iconPerson,
      iconAlt:"Icone de uma pessoa",
      iconTitle:"Pessoa",
    }
]






export function CardCourse({subtitle,title,description, listingIcons, btnText,btnHref,value,imageSrc,imageAlt,imageTitle,rating, areaImage,areaImageAlt,areaImageTitle}:CardProps){
    return(
        <div className="w-full bg-white rounded-3xl flex items-center justify-between p-8 h-card-course">
              <div className="w-full max-w-xl">
                   <SubTitle text={subtitle}/>
                   <h3 className="font-bold text-3xl text-gray-900 my-5">{title}</h3>
                   <p className="text-xl text-gray-800 mb-5">{description}</p>
                    <ul className="flex items-center gap-4">
                {
                    listingIcons.map((item, index) => (

                        <li key={index} className="flex items-center gap-2">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <Image
                                     src={icons[index].iconSrc}
                                     alt={icons[index].iconAlt}
                                     title={icons[index].iconTitle}
                                    /> 
                                                    
                                </div>
                            <span className="text-lg text-gray-800 font-medium">{item}</span>
                        </li>
                    ))
                }
              </ul>

                   <div className="flex items-center justify-between mt-9">
                          <div className="flex items-center gap-4">
                               <Button>{btnText}</Button>
                               <strong className="text-3xl text-primary-700">{value}</strong>
                          </div>
                          <div  className="flex items-center gap-2">
                               <Image
                                src={imageSrc}
                                alt={imageAlt}
                                title={imageTitle}
                               />
                               <span className="text-lg text-gray-800 font-semibold">({rating})</span>
                          </div>
                   </div>
              </div>
              <Image
               src={areaImage}
               alt={areaImageAlt}
               title={areaImageTitle}
               className="w-full max-w-xl object-cover rounded-xl h-full"
              />
        </div>
    )
}