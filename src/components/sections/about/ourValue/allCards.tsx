import { CardMatter } from "@/components/cardMatter"

import icon01 from "@/assets/icons/icon-matter-01.png";


const cardsDetails = [
    {
        title:"Accessibility",
        description:"Learning for everyone, anytime, anywhere — across devices and borders.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    },
    {
        title:"Quality",
        description:"Learn from top-rated instructors through real-world tasks and projects.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    },
    {
        title:"Flexibility",
        description:"Self-paced, on-demand learning that fits your schedule and lifestyle.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    },
    {
        title:"Growth",
        description:"Practical skills and certifications that open doors in your career.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    },
    {
        title:"Community",
        description:"A vibrant global network of learners, mentors, and industry professionals.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    },
    {
        title:"Support",
        description:"Personalized guidance, live sessions, and active discussion forums.",
        iconSrc:icon01,
        iconAlt:"Icone de acessilbidade"
    }
]

export function AllMatterCards(){
    return(
              <div className="grid laptop:grid-cols-2 desktop:grid-cols-3 gap-8 mt-8 laptop:mt-16">
                   {
                            cardsDetails.map(({title,description,iconSrc,iconAlt}) => (
                            <CardMatter
                            key={title + description}
                            title={title}
                            description={description}
                            iconSrc={iconSrc}
                            iconAlt={iconAlt}
                            />
                        ))
                   }
              </div>
    )
}