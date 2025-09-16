import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";

export function SectionInstructors(){
    return(
        <section>
            <ContainerGRID>
                   <div>
                       <HeadingTitle subtitle="Instructors">
                            <span>Meet</span> Our <span>Instructors</span>
                       </HeadingTitle>
                       <p>Our instructors are experienced professionals, educators, and industry experts committed to delivering practical knowledge with passion and clarity.</p>
                   </div>
            </ContainerGRID>
        </section>
    )
}