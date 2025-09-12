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
        <section className="pt-52 pb-28 bg-primary-650 relative">
            <Details/>
            <ContainerGRID className="text-center text-white">
                 <h1 className={`font-bold text-8xl max-w-cardSection mx-auto ${style.title}`}>{children}</h1>
                 <p className="text-2xl mt-8">{description}</p>
            </ContainerGRID>
        </section>
    )
}