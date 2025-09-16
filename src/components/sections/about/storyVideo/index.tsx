import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { CardVideo } from "./cardVideo";

export function SectionStoryVideo(){
    return(
        <section className="py-28">
            <ContainerGRID>
                   <div className="text-center">
                          <HeadingTitle subtitle="Video">
                        <span>Watch</span> Our <span>Story</span>
                        </HeadingTitle>
                        <p className="mt-4 text-2xl text-gray-800 max-w-4xl mx-auto">Get a glimpse into how Eduvance started, what drives us, and how we’re transforming education—one learner at a time.</p>
                   </div>
                   <CardVideo/>
            </ContainerGRID>
        </section>
    )
}


