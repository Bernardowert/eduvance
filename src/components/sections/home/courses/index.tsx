import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { AreaCourse } from "./coursesArea";

export function SectionCourses(){
    return(
        <section className="bg-detail01 bg-secondary-1000 bg-right-top bg-no-repeat py-20">
             <ContainerGRID>
                     <div  className="flex items-end justify-between">
                        <HeadingTitle subtitle="Courses" className="max-w-title-personal">
                            <span>Top</span> Picks to Kickstart Your <span>Learning</span>
                        </HeadingTitle>
                        <Button btnStyle="btnSecondary">View More Courses</Button>
                     </div>
                    <AreaCourse/>
             </ContainerGRID>
        </section>
    )
}