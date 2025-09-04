import Image from "next/image";
import Link from "next/link";


import chevRight from "@/assets/icons/chevron-right.svg";
import { ReactNode } from "react";


interface CardProps{
    title:string;
    subtitle:string;
    href:string;
    children:ReactNode;
}

export function CardCategory({title,subtitle,href, children}:CardProps){
    return(
        <div className="px-6 py-8 rounded-2xl bg-white w-full h-card-category flex items-start flex-col group transition-colors ease-linear hover:bg-primary-500">
            <div className="text-gray-900 transition-colors ease-linear group-hover:text-white">
                <h3 className="font-bold text-3xl mb-4">{title}</h3>
                <span className="font-medium text-xl">{subtitle}</span>
            </div>
            <div className="flex items-end justify-between w-full mt-auto text-primary-500 transition-colors ease-linear group-hover:text-secondary-300">
                <Link href={href} className=" w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full">
                  <Image
                   src={chevRight}
                   alt="Icone seta direita"
                   title="seta direita"
                  />
                </Link>
                
                {children}
            </div>
        </div>
    )
}