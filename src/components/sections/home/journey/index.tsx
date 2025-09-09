import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { CardsJourney } from "./cards";

export function SectionJourney(){
    return(
         <section>
            <ContainerGRID>
                  <HeadingTitle subtitle="How It Works" className="max-w-hero-areaText mx-auto text-center">
                      Your <span>Learning Journey</span> in 4 Simple Steps
                  </HeadingTitle>
                  <CardsJourney/>
            </ContainerGRID>
         </section>
    )
}