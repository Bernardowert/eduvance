import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Cards } from "./cards";

export function SectionPricing(){
    return(
        <section className="pt-28">
            <ContainerGRID>
               <div className="text-center">
                    <HeadingTitle subtitle="Pricing">
                    <span>Choose</span> What Works for <span>You</span>
                    </HeadingTitle>
                    <p className="text-2xl text-gray-800 mt-4">Find a plan that fits your learning goals, schedule, and budget.</p>
               </div>
               <Cards/>
            </ContainerGRID>
        </section>
    )
}