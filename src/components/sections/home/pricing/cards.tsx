import { CardPricing } from "@/components/cardPricing";


const allCards = [
    {
        btnText:"Get Started Today",
        description:"Perfect for individuals beginning their learning journey or exploring our platform.",
        title:"Free Plan",
        price:"0",
        listings:[
            {
                descriptionIcon:"Access to Free Courses",
            },
            {
                descriptionIcon:"Access to All Premium Courses",
            },
            {
                descriptionIcon:"Community Forum Access",
            },
            {
                descriptionIcon:"Downloadable Certificates",
                notIncluded:true
            },
            {
                descriptionIcon:"Offline Viewing",
                notIncluded:true
            }
        ]
    },
    {
        btnText:"Get Started Today",
        description:"Best for consistent learners and professionals seeking more value",
        title:"Starter Plan",
        bestPrice:true,
        price:"29",
        listings:[
            {
                descriptionIcon:"Access to Free Courses",
            },
            {
                descriptionIcon:"Access to All Premium Courses",
            },
            {
                descriptionIcon:"Community Forum Access",
            },
            {
                descriptionIcon:"Downloadable Certificates",
            },
            {
                descriptionIcon:"Offline Viewing",
                notIncluded:true
            }
        ]
    },
    {
        btnText:"Get Started Today",
        description:"Unlock full potential with advanced features.",
        title:"Pro Plan",
        price:"59",
        listings:[
            {
                descriptionIcon:"Access to Free Courses",
            },
            {
                descriptionIcon:"Access to All Premium Courses",
            },
            {
                descriptionIcon:"Community Forum Access",
            },
            {
                descriptionIcon:"Downloadable Certificates",
            },
            {
                descriptionIcon:"Offline Viewing",
            }
        ]
    }
]

export function Cards(){
    return(
        <div className="flex items-center justify-between mt-16">
               {
                  allCards.map(({btnText,description,title,price,listings, bestPrice}) => (
                      <CardPricing key={title} btnText={btnText} description={description} title={title} price={price} listings={listings} bestPrice={bestPrice}/>
                  ))
               }
        </div>
    )
}