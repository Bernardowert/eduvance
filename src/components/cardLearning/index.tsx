import { Button } from "../button";
import { ContainerGRID } from "../containerGRID";
import { HeadingTitle } from "../headingTitle";



interface LearningProps{
    subtitle:string;
    title:string;
    description:string;
    btnText:string;
}

export function CardLearning({subtitle,title,description,btnText}:LearningProps){
    return(
         <section className="py-28 rounded-4xl bg-primary-650">
            <ContainerGRID className="text-center">
                 <HeadingTitle subtitle={subtitle} classNameTitle="text-white" styleName="yellow">
                     {title}
                </HeadingTitle>
                <p className="mt-6 mb-8  text-2xl/normal text-white max-w-title-personal mx-auto">{description}</p>
                <Button>{btnText}</Button>
            </ContainerGRID>
         </section>
    )
}