import Link from "next/link";
import Image from "next/image";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../button";

import iconLibrary from "@/assets/icons/icon-library.png";
import iconHamburguer from "@/assets/icons/iconHamburguer.svg";

export function Header(){
    return(
        <header className="w-full fixed top-0 left-0 h-20 flex items-center bg-white border-b border-gray-100 desktop:border-b-0 desktop:h-28" >
             <ContainerGRID className="flex items-center justify-between">
                 <Link href="/" className="flex items-center gap-3">            
                   <Image
                    src={iconLibrary}
                    alt="Logo Eduvance"
                    loading="eager"
                    className="max-w-8 desktop:max-w-full"
                   />
                   <span className="font-bold text-2xl desktop:text-4xl text-primary-700">Eduvance</span>
                 
                 </Link>
                 <NavListing/>
                 <Button  className="hidden desktop:inline-block">
                    Get In Touch
                 </Button>
                 <button className="desktop:hidden">
                    <Image
                     src={iconHamburguer}
                     alt="Icone menu mobile"
                    />
                 </button>
             </ContainerGRID>
        </header>
    )
}