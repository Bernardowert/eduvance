
import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { BgDetails } from "./bgDetails";
import { ReactNode } from "react";




interface LearningProps{
    children:ReactNode;
    subtitle:string;
    description:string;
    btnText:string;
}

export function SectionLearning({children,description,btnText,subtitle}:LearningProps){
    return(
        <section className="bg-detail03 bg-no-repeat bg-top-right  bg-secondary-300 h-[544px] relative flex items-center z-10">
            <BgDetails/>
            <ContainerGRID className="text-center">
                 <HeadingTitle subtitle={subtitle}>
                    {children}
                 </HeadingTitle>
                 <p className="text-2xl text-gray-800 mt-6 mb-8 max-w-card-p mx-auto">{description}</p>
                 <Button btnStyle="btnThird">
                    {btnText}
                 </Button>
            </ContainerGRID>
        </section>
    )
}