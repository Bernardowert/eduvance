import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Instructors } from "./instructors";

export function SectionInstructors(){
    return(
        <section className="py-28">
            <ContainerGRID>
                   <div className="text-center">
                       <HeadingTitle subtitle="Instructors">
                            <span>Meet</span> Our <span>Instructors</span>
                       </HeadingTitle>
                       <p className="text-2xl max-w-p-instructor mx-auto text-gray-800 mt-4">Our instructors are experienced professionals, educators, and industry experts committed to delivering practical knowledge with passion and clarity.</p>
                   </div>
                   <Instructors/>
            </ContainerGRID>
        </section>
    )
}