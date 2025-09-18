import { ReactNode } from "react";
import { Button } from "../button";
import { ContainerGRID } from "../containerGRID";
import { HeadingTitle } from "../headingTitle";
import { AllDetails } from "./allDetails";



interface LearningProps{
    subtitle:string;
    children:ReactNode;
    description:string;
    btnText:string;
}

export function CardLearning({subtitle,children,description,btnText}:LearningProps){
    return(
         <section className="py-28 rounded-4xl bg-primary-650 relative">
            <ContainerGRID className="text-center">
                 <HeadingTitle subtitle={subtitle} classNameTitle="text-white" styleName="yellow">
                     {children}
                </HeadingTitle>
                <p className="mt-6 mb-8 tablet:text-2xl/normal  text-white max-w-title-personal mx-auto">{description}</p>
                <Button>{btnText}</Button>
            </ContainerGRID>
            <AllDetails/>
         </section>
    )
}