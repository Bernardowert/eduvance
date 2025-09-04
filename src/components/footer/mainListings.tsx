import Link from "next/link";
import Image from "next/image";


import { Button } from "../button";

import logoX from "@/assets/icons/logo-X.svg";
import instagram from "@/assets/icons/logo-instagram.svg";
import facebook from "@/assets/icons/icon-facebook.svg";
import linkedin from "@/assets/icons/logo-linkeding.svg";

import logo from "@/assets/icons/Logo.png";

const socialList = [
    {
        src: logoX,
        alt: "Icone Twitter",
        title: "Twitter",
    },
    {
        src: instagram,
        alt: "Icone Instagram",
        title: "Instagram",
    },
    {
        src: facebook,
        alt: "Icone Facebook",
        title: "Facebook",
    },
    {
        src: linkedin,
        alt: "Icone Linkedin",
        title: "Linkedin",
    }
]

const navListing = [
    {
        text:"About Us",
        href:"/about"
    },
    {
        text:"Courses",
        href:"/courses"
    },
    {
        text:"Help Center",
        href:"#"
    }
]
export function MainListings(){
    return(
                           <div className="flex items-start justify-between">
                          <div className="w-full max-w-hero-areaText">
                                <Link href="/" className="inline-block">
                                  <Image
                                    src={logo}
                                    alt="Logo Eduvance"
                                    title="Logo Eduvance"
                                />
                                </Link>
                                <p className="text-lg text-gray-800 mt-4">Helping You Find the Perfect Home, Every Step of the Way.</p>
                                 <ul className="flex items-center gap-3.5 mt-12">
                                      {
                                        socialList.map(({src,alt,title}) => (
                                            <li key={title}>
                                                <Link href={src} className="w-8 h-8  flex items-center justify-center bg-primary-50 rounded-full transition-all ease-linear [&:hover,&:focus]:bg-secondary-200">
                                                    <Image
                                                        src={src}
                                                        alt={alt}
                                                        title={title}
                                                    />
                                                </Link>
                                            </li>
                                        ))
                                      }
                                 </ul>
                          </div>
                          <div className="w-full max-w-[174px]">
                               <strong className="font-semibold text-lg text-gray-900 block mb-4">Menu</strong>
                               <ul className="space-y-3">
                                   {
                                     navListing.map(({text,href}) => (
                                        <li key={text}>
                                            <Link href={href} className="text-gray-800 transition-colors ease-linear [&:hover,&:focus]:text-primary-500">{text}</Link>
                                        </li>
                                     ))
                                   }
                               </ul>
                          </div>
                          <div className="w-full max-w-footer-form">
                             <strong className="font-semibold text-lg text-gray-900">Stay in the loop!</strong>
                             <p className="text-lg text-gray-800 my-6">Subscribe to our newsletter for course updates, expert tips, and special offers.</p>
                             <form className="flex items-center gap-3">
                                 <input
                                  type="email"
                                  required
                                  placeholder="Enter your email"
                                  className="rounded-full pl-6 pr-2 leading-12 border border-gray-200 w-full"
                                 />
                                 <Button>Subscribe</Button>
                             </form>
                          </div>
                  </div>
    )
}