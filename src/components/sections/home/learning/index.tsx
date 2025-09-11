
import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { BgDetails } from "./bgDetails";


export function SectionLearning(){
    return(
        <section className="bg-detail03 bg-no-repeat bg-top-right  bg-secondary-300 h-[544px] relative flex items-center z-10">
            <BgDetails/>
            <ContainerGRID className="text-center">
                 <HeadingTitle subtitle="Best Learning Platform">
                    Ready to start <span>learning?</span>
                 </HeadingTitle>
                 <p className="text-2xl text-gray-800 mt-6 mb-8 max-w-card-p mx-auto">Join thousands of learners and take the first step toward your future today.</p>
                 <Button btnStyle="btnThird">
                    Explore Course Now
                 </Button>
            </ContainerGRID>
        </section>
    )
}