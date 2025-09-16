import { CardInstructor } from "@/components/cardInstructors";

import instructor01 from "@/assets/icons/icon-card-instructor-01.png";
import instructor02 from "@/assets/icons/icon-card-instructor-02.png";
import instructor03 from "@/assets/icons/icon-card-instructor-03.png";
import instructor04 from "@/assets/icons/icon-card-instructor-04.png";
const allCards = [
    {
        name:"Alex Chen",
        job:"Full Stack Developer & Tech Mentor",
        imgSrc:instructor01,
        imgAlt:"Instructor Alex Chen"
    },
     {
        name:"Sara Miles",
        job:"Certified Digital Marketing Strategist",
        imgSrc:instructor02,
        imgAlt:"Instructor Sara Miles"
    },
     {
        name:"Dr. Nina Hart",
        job:"Health & Wellness Expert",
        imgSrc:instructor03,
        imgAlt:"Instructor Nina Hart"
    },
     {
        name:"Jason Ramirez",
        job:"Creative Designer & Adobe Certified ",
        imgSrc:instructor04,
        imgAlt:"Instructor Jason Ramirez"
    },
    
]

export function Instructors(){
    return(
        <div className="grid grid-cols-2 gap-4 mt-8 laptop:mt-16 laptop:grid-cols-4">
              {
                allCards.map(({name,job,imgSrc,imgAlt}) => (
                    <CardInstructor key={name} name={name} job={job} imgSrc={imgSrc} imgAlt={imgAlt}/>
                ))
              }
        </div>
    )
}