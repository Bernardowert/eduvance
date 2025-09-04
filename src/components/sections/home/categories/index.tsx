import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { AreaCards } from "./areaCards";

export function SectionCategories(){
    return(
        <section className="bg-detail01 bg-no-repeat bg-top-right bg-secondary-1000 py-20 rounded-4xl">
            <ContainerGRID>
                <HeadingTitle subtitle="Category" className="max-w-title-categories">
                    Professionally <span>Aligned Learning</span> Categories
                </HeadingTitle>
                <AreaCards/>
            </ContainerGRID>
        </section>
    )
}