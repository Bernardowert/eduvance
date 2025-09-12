import { ReactNode } from "react";
import { SubTitle } from "../subtitle";

import style from "./style.module.css";

interface TitleProps{
    subtitle:string;
    className?:string;
    children:ReactNode;
    classNameTitle?:string;
}

export function HeadingTitle({subtitle,className,children,classNameTitle}:TitleProps){
    return(
        <div className={`${style.titleHeading} ${className ? className : ""}`}>
            <SubTitle text={subtitle} className="text-sm laptop:text-lg"/>
            <h2 className={`laptop:text-6xl text-3xl font-bold text-gray-900 mt-6 capitalize ${classNameTitle ? classNameTitle : ""}`}>{children}</h2>
        </div>
    )
}