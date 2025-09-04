import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";

export function SectionAbout(){
    return(
        <section className="pt-36 pb-40 bg-sectionPersonal bg-center bg-no-repeat">
            <ContainerGRID>
                <HeadingTitle subtitle="About Us" className="max-w-title-personal mx-auto text-center">
                   <span>Gateway</span> To Personal and Professional <span>Growth</span>
                </HeadingTitle>
                <p className="text-2xl text-gray-700 mt-8 max-w-[932px] text-center mx-auto">We believe that education is the foundation of a brighter future. Our platform connects learners with world-class instructors and practical, industry-relevant courses to help individuals advance their careers and personal goals—anytime, anywhere.</p>
            </ContainerGRID>
        </section>
    )
}