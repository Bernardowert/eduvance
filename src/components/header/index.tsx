import Link from "next/link";
import Image from "next/image";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../button";

import logo from "@/assets/icons/Logo.png";
import iconHamburguer from "@/assets/icons/iconHamburguer.svg";

export function Header(){
    return(
        <header className="w-full fixed z-50 top-0 left-0 h-20 flex items-center bg-white border-b border-gray-100 laptop:border-b-0 laptop:h-28" >
             <ContainerGRID className="flex items-center justify-between">
                 <Link href="/" className="flex items-center gap-3">            
                   <Image
                    src={logo}
                    alt="Logo Eduvance"
                    loading="eager"
                    className="max-w-40 laptop:max-w-full"
                   />
                 
                 </Link>
                 <NavListing/>
                 <Button  className="hidden laptop:inline-block">
                    Get In Touch
                 </Button>
                 <button className="laptop:hidden">
                    <Image
                     src={iconHamburguer}
                     alt="Icone menu mobile"
                    />
                 </button>
             </ContainerGRID>
        </header>
    )
}