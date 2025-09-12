import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { AllMatterCards } from "./allCards";

export function SectionOurValue(){
    return(
        <section className="laptop:py-20 py-8 bg-secondary-300 rounded-4xl">
            <ContainerGRID>
                 <HeadingTitle subtitle="Our Value" className="text-center">
                       Built on <span>Principles</span> That Matter
                 </HeadingTitle>
                 <AllMatterCards/>
            </ContainerGRID>
        </section>
    )
}