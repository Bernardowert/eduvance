import { CardCourse } from "@/components/cardCourse";


import star05 from "@/assets/icons/Rating Icon_5.png";
import star04 from "@/assets/icons/rating-icon-4.png";

import image01 from "@/assets/images/hero/image-course-01.png";
import image02 from "@/assets/card-course-02.png";
import image03 from "@/assets/card-course-03.png";



const listing = [
    {
        subtitle:"Technology & Development",
        title:"Full Stack Web Development Bootcamp",
        description:"Transform ideas into reality with innovative designs, advanced technology, and end-to-end support ",
        listings: [
            "60 Lessons",
            "60hrs",
            "75 Students"
        ],
        btnText:"View Courses",
        value:"$79",
        imageSrc:star05,
        imageAlt:"Icone de estrela",
        imageTitle:"Estrela Rating 5",
        rating:"5.0",
        areaImage:image01,
        areaImageAlt:"Imagem ilustrativa de uma garota segurando livros",
        areaImageTitle:"Imagem ilustrativa de uma garota segurando livros"
    },
    {
        subtitle:"Design & Creativity",
        title:"Creative Graphic Design Essentials",
        description:"Master the fundamentals of visual design and bring your creative ideas to life.",
        listings: [
            "28 Lessons",
            "60hrs",
            "100 Students"
        ],
        btnText:"View Courses",
        value:"$39",
        imageSrc:star04,
        imageAlt:"Icone de estrela",
        imageTitle:"Estrela Rating 4",
        rating:"4.6",
        areaImage:image02,
        areaImageAlt:"Imagem ilustrativa de uma pessoa segurando um tablet e criando um design(flores)",
        areaImageTitle:"Imagem ilustrativa de uma pessoa segurando um tablet e criando um design(flores)"
    },
     {
        subtitle:"Health & Wellness",
        title:"Mindfulness & Stress Management",
        description:"Discover practical techniques to reduce stress, stay present, and improve your overall well-being.",
        listings: [
            "18 Lessons",
            "8hrs",
            "90 Students"
        ],
        btnText:"View Courses",
        value:"$39",
        imageSrc:star04,
        imageAlt:"Icone de estrela",
        imageTitle:"Estrela Rating 4",
        rating:"4.0",
        areaImage:image03,
        areaImageAlt:"Imagem ilustrativa de uma garota praticando meditação",
        areaImageTitle:"Imagem ilustrativa de uma garota praticando meditação"
    }
]


export function AreaCourse(){
    return(
        <div className="space-y-8 mt-16">
               {
                 listing.map(({subtitle,title,description,listings,btnText,value,imageSrc,imageAlt,imageTitle,rating,areaImage,areaImageAlt,areaImageTitle}) => (
                     <CardCourse
                     key={title}
                     subtitle={subtitle}
                     title={title}
                     description={description}
                     listingIcons={listings}
                     btnText={btnText}
                     value={value}
                     imageSrc={imageSrc}
                     imageAlt={imageAlt}
                     imageTitle={imageTitle}
                     rating={rating}
                     areaImage={areaImage}
                     areaImageAlt={areaImageAlt}
                     areaImageTitle={areaImageTitle}
                     />
                 ))
               }
        </div>
    )
}