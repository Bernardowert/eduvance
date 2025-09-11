import { ContainerGRID } from "@/components/containerGRID"
import { HeadingTitle } from "@/components/headingTitle"
import { FaqsListing } from "./allFaqs"

export function SectionFaqs(){
    return(
        <section className="pt-44 pb-28">
              <ContainerGRID className="flex items-start justify-between">
                <div className="w-full max-w-hero-areaText">
                    <HeadingTitle subtitle="FAQ’S">
                          <span>Frequently</span> asked <span>question</span>
                    </HeadingTitle>
                    <p className="text-2xl text-gray-800 mt-4">Have questions? We’ve got answers to help you get the most out of your learning journey.</p>
                </div>
                <FaqsListing/>
              </ContainerGRID>
        </section>
    )
}