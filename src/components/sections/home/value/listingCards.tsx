import Image from "next/image";
import iconAcess from "@/assets/icons/icon-acessibility.png";
import iconQuality from "@/assets/icons/icon-quality.png";
import iconExtension from "@/assets/icons/icon-extension.png";
import iconRocket from "@/assets/icons/icon-rocket.png";
const listing = [
    {
        iconSrc:iconAcess,
        iconAlt:"Icone de Acessibilidade",
        iconTitle:"Acessibilidade",
        title:"Accessibility",
        description:"Learning without boundaries — for every learner, in every place"
    },
    {
        iconSrc:iconQuality,
        iconAlt:"Icone de Qualidade",
        iconTitle:"Qualidade",
        title:"Quality",
        description:"Top instructors, real-world tasks, up-to-date lessons"
    },
    {
        iconSrc:iconExtension,
        iconAlt:"Icone de Flexibility",
        iconTitle:"Flexibility",
        title:"Flexibility",
        description:"Self-paced, on-demand learning that fits your schedule and lifestyle."
    },
    {
        iconSrc:iconRocket,
        iconAlt:"Icone de Rocket",
        iconTitle:"Growth",
        title:"Growth",
        description:"Practical skills and certifications that open doors in your career and beyond."
    }
]
export function ListingCards(){
    return(
            <ul className="mt-16 grid grid-cols-2 gap-8">
                {
                    listing.map(({iconSrc,iconAlt,iconTitle,title,description}) => (
                        <li key={iconAlt}>
                            <div className="w-14 h-14 flex items-center justify-center bg-primary-50 rounded-full mb-8">
                                <Image
                                src={iconSrc}
                                alt={iconAlt}
                                title={iconTitle}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl text-gray-900 font-semibold">{title}</h3>
                                <p className="text-gray-800 mt-4">{description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
    )
}