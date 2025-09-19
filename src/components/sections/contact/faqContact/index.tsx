import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { FaqList } from "./faqList";

export function SectionFaqContact(){
    return(
        <section className="py-8 laptop:py-16">
            <ContainerGRID className="flex items-start justify-between flex-col gap-8 laptop:gap-0 laptop:flex-row">
                   <div className="w-full laptop:max-w-page-about text-center laptop:text-start">
                       <HeadingTitle subtitle="FAQ’S">
                          <span>Frequently</span> asked <span>question</span>
                       </HeadingTitle>
                       <p className="mt-4 laptop:text-2xl text-gray-800">Have questions? We’ve got answers to help you get the most out of your learning journey.</p>
                   </div>
                   <FaqList/>
            </ContainerGRID>
        </section>
    )
}