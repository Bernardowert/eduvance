import { ReactNode } from "react";
import { ContainerGRID } from "../containerGRID";
import { Details } from "./details";

import style  from "./style.module.css";


interface CardSectionProps{
    description:string;
    children:ReactNode;
}


export function CardSection({description, children}:CardSectionProps){
    return(
        <section className="pt-52 pb-28 h-card-video bg-primary-650 relative z-20 overflow-hidden flex items-center">
            <Details/>
            <ContainerGRID className="text-center text-white">
                 <h1 className={`text-5xl  font-bold laptop:text-8xl max-w-cardSection mx-auto ${style.title}`}>{children}</h1>
                 <p className="laptop:text-2xl mt-8">{description}</p>
            </ContainerGRID>
        </section>
    )
}