import Image from "next/image";


import iconSearch from "@/assets/icons/search.png";
import menuIcon from "@/assets/icons/menu_book_purple.png";
import iconCertificate from "@/assets/icons/articleIcon.png";
import rocketIcon from "@/assets/icons/rocket_launch_purple.png";
const cards = [
    {
        iconSrc:iconSearch,
        iconAlt:"Icone search",
        title:"Browse Courses",
        description:"Choose from a wide range of topics." 
    },
    {
        iconSrc:menuIcon,
        iconAlt:"Icone Livro",
        title:"Enroll & Learn",
        description:"Study anytime, anywhere at your own pace." 
    },
    {
        iconSrc:iconCertificate,
        iconAlt:"Icone Certificado",
        title:"Earn Certificate",
        description:"Showcase your skills with recognized certificates." 
    },
    {
        iconSrc:rocketIcon,
        iconAlt:"Icone Rocket",
        title:"Advance Career",
        description:"Apply your knowledge to real-world challenges." 
    }
]
export function CardsJourney(){
    return(
        <ul className="flex items-center relative justify-between mt-16 before:content-[''] before:absolute before:w-full before:max-w-[999px] before:h-10 before:bg-journey before:bg-no-repeat before:top-[93px] before:left-[50%] before:translate-x-[-50%] before:-z-10">
             {
                cards.map(({iconSrc, iconAlt, title, description}) => (
                  <li key={iconAlt + title} className="w-full max-w-card-journey py-8 px-5">
                        <div className="w-full max-w-24 h-24 mx-auto bg-primary-50 rounded-full flex items-center justify-center">
                                <Image
                                src={iconSrc}
                                alt={iconAlt}
                                title={iconAlt}
                                />
                        </div>
                        <div className="text-center mt-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
                            <p className="text-xl text-gray-800">{description}</p>
                        </div>
                     </li>
                ))
             }
        </ul>
    )
}