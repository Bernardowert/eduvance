import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { MainListings } from "./mainListings";


const subLinks = [
     {
        href: "#",
        text: "Terms & Conditions"
     },
     {
        href: "#",
        text: "Privacy Policy"
     }
]
export function Footer(){
    return(
        <footer className="py-12">
            <ContainerGRID className="!max-w-containerFooter">
                 <MainListings/>
                  <div className="flex items-center justify-between mt-8 border-t border-gray-200 pt-8">
                     <span>2025 Eduvance. All rights reserved.</span>
                     <div className="flex items-center gap-4">
                         {
                             subLinks.map(({href,text}) => (
                                 <Link key={text} href={href} className="text-gray-900 transition-colors ease-linear [&:hover,&:focus]:text-primary-700">{text}</Link>
                             ))
                         }
                     </div>
                  </div>
            </ContainerGRID>
        </footer>
    )
}