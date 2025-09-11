import { Faqs } from "@/components/faqs";

const listings = [
    {
        title:"Do I get a certificate after completing a course?",
        description:"Yes! All paid courses come with a downloadable certificate. Free courses do not include certificates."
    },
    {
        title:"Can I learn at my own pace?",
        description:"Absolutely. All courses are self-paced, allowing you to study whenever it suits you."
    },
    {
        title:"What kind of support will I receive?",
        description:"You Will have access to community forums, instructor Q&As, and for Pro Plan users—1-on-1 mentorship."
    },
    {
        title:"Are courses updated regularly?",
        description:"Yes, our instructors update course content regularly to ensure it stays relevant and up-to-date."
    }
]


export function FaqsListing(){
    return(
        <div className="w-full max-w-hero-areaText space-y-8">
               {
                listings.map(({title,description}, index) => (
                       <Faqs
                        key={title}
                        title={title}
                        description={description}
                        id={title}
                        classNameAdd={index === 0 ? "pt-0" : ""}
                        />
                ))
               }
        </div>
    )
}