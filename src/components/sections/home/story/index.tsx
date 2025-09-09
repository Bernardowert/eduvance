import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Slides } from "./slides";

export function SectionStory(){
    return(
        <section className="py-20 bg-detail01 bg-no-repeat bg-top-right bg-secondary-300">
            <ContainerGRID>
                   <HeadingTitle subtitle="Testimonial" className="text-center">
                       <span>Proof</span> in Every <span>Story</span>
                   </HeadingTitle>
                   <Slides/>
            </ContainerGRID>
        </section>
    )
}