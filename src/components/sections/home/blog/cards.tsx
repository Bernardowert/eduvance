import { CardBlog } from "@/components/cardBlog";
import woman01 from "@/assets/images/hero/blog-woman-01.png";
import blog02 from "@/assets/images/hero/card-blog-02.png";
import blog03 from "@/assets/images/hero/card-blog-03.png";
import blog04 from "@/assets/images/hero/card-blog-04.png";
import blog05 from "@/assets/images/hero/card-blog-05.png";
const allCards = [
    {
        src:blog02,
        subtitle:"Productivity",
        alt:"Imagem de uma mulher estudando",
        title:"How to Choose the Right Online Course for Your Career",
        titleImg:"mulher estudando",
        date:"March 10, 2025"
    },
    {
        src:blog03,
        subtitle:"Career",
        alt:"Imagem de pessoas estudando",
        title:"2025 Skill Forecast: The Top 10 Abilities You Need to Thrive",
        titleImg:"pessoas estudando",
        date:"March 10, 2025"
    },
    {
        src:blog04,
        subtitle:"Motivation",
        alt:"Imagem de pessoa estudando",
        title:"How to Stay Motivated in Long-Term Online Courses",
        titleImg:"pessoas estudando",
        date:"March 29, 2025"
    },
    {
        src:blog05,
        subtitle:"Personal Growth",
        alt:"Imagem de pessoa estudando",
        title:"Why Lifelong Learning is Your Biggest Career Asset",
        titleImg:"pessoas estudando",
        date:"April 10, 2025"
    }
]


export function CardsBlogs(){
    return(
        <div className="flex items-start justify-between gap-8 mt-16">
                <CardBlog
                src={woman01}
                subtitle="Productivity"
                alt="sdsadas"
                title="Balancing Work and Study: A Guide for Online Learners"
                titleImg="sdasdsadsa"
                description="Explore key factors in selecting an online course that aligns with your career goals,"
                date="March 29, 2025"
                isLarge
                className="max-w-title-categories"
                path="balancing-work-and-study-a-guide-for-online-learners"
                />

                <div className="grid grid-cols-2 gap-6 w-full max-w-title-categories">
                        {
                            allCards.map(({src,subtitle,alt,title,titleImg,date},index) =>(
                                <CardBlog key={index} src={src} subtitle={subtitle} alt={alt} title={title} titleImg={titleImg} date={date}/>
                            ))
                        }
                </div>
        </div>
    )
}