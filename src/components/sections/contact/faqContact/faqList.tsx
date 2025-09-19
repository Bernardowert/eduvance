import { Faqs } from "@/components/faqs";

const allFaqs = [
    {
       title: "Do I get a certificate after completing a course?",
       description: "Yes! All paid courses come with a downloadable certificate. Free courses do not include certificates."
    },
    {
       title: "Can I learn at my own pace?",
       description: "Absolutely. All courses are self-paced, allowing you to study whenever it suits you."
    },
    {
       title: "What kind of support will I receive?",
       description: "You’ll have access to community forums, instructor Q&As, and for Pro Plan users—1-on-1 mentorship."
    },
    {
       title: "Are courses updated regularly?",
       description: "Yes, our instructors update course content regularly to ensure it stays relevant and up-to-date."
    },
]


export function FaqList(){
    return(
          <div className="space-y-4 laptop:space-y-8 w-full laptop:max-w-page-about">
                {
                    allFaqs.map(({title,description}) => (
                        <Faqs
                        key={title}
                        title={title}
                        description={description}
                        id={title}
                        />
                    ))
                }
          </div>
    )
}
