import { CardMatter } from "@/components/cardMatter";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";

export function SectionOurValue(){
    return(
        <section className="py-20 bg-secondary-300 rounded-4xl">
            <ContainerGRID>
                 <HeadingTitle subtitle="Our Value">
                       Built on <span>Principles</span> That Matter
                 </HeadingTitle>
                 <CardMatter/>
            </ContainerGRID>
        </section>
    )
}