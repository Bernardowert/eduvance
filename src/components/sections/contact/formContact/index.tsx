import Image from "next/image";

import { ContainerGRID } from "@/components/containerGRID";
import { Form } from "./form";



import logoX from "@/assets/icons/logo-X.svg";
import LogoFacebook from "@/assets/icons/icon-facebook.svg";
import logoInstagram from "@/assets/icons/logo-instagram.svg";
import logoLinkedin from "@/assets/icons/logo-linkeding.svg";



const allLinks = [
    {
        subtitle:"Email",
        textHref:"info@viewlightstudio.com",
        href:"mailto:info@viewlightstudio.com"
    },
    {
        subtitle:"Phone",
        textHref:"+1 (800) 234-9876",
        href:"tel:+1 (800) 234-9876"
    },
    {
        subtitle:"Location",
        textHref:"Eduvance HQ - 28 Sunrise Ave, San Francisco, CA 94104, USA",
        href:"https://maps.app.goo.gl/47pCSDXiRhLz4gcp6"
    },
    {
        subtitle:"Hours Operation",
        textHref:"Monday – Friday: 9:00 AM – 6:00 PM (PST)",
        href:"https://www.worldtimebuddy.com/pst-to-brazil-brasilia"
    }
]


const socialsLinks = [
    {
        src: logoX,
        alt: "Logo do twitter",
        href: "https://twitter.com"
    },
    {
        src: LogoFacebook,
        alt: "Logo do Facebook",
        href: "https://facebook.com"
    },
    {
        src: logoInstagram,
        alt: "Logo do Instagram",
        href: "https://instagram.com"
    },
    {
        src: logoLinkedin,
        alt: "Logo do Linkedin",
        href: "https://linkedin.com"
    }
]


export function FormContact(){

    return(
          <section className="bg-primary-50 h-[1542px] tablet:h-[1421px] py-8 laptop:py-16 relative laptop:static laptop:h-auto">
             <ContainerGRID className="flex justify-between flex-col laptop:flex-row">
                 <div className="w-full laptop:max-w-page-about">
                    <div className="text-center laptop:text-start mb-8 laptop:mb-24">
                        <h2 className="font-bold text-gray-900 text-3xl mb-4 laptop:text-6xl/tight laptop:mb-6 text-center laptop:text-start">Have Questions? We re Here to Help!</h2>
                        <p className="laptop:text-2xl text-gray-800">We re here to help. Submit your inquiry through the form, and our team will respond within 24 48 hours.</p>
                    </div>
                    <div className="absolute laptop:static bottom-8 left-4 right-4">
                        <ul className="grid mb-10 laptop:grid-cols-2 gap-6 laptop:gap-x-8 laptop:gap-y-10">
                            {
                                allLinks.map(({subtitle,textHref,href}) => (
                                    <li key={subtitle}>
                                        <span className="block mb-4 text-xl font-medium text-primary-650">{subtitle}</span>
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-900 transition-colors ease-linear [&:hover,&:focus]:text-primary-650">{textHref}</a>
                                </li>
                                ))
                            }
                        </ul>
                    <div>
                         <span className="text-lg text-gray-800 font-medium">Follow Us</span>
                         <ul className="flex items-center gap-3.5 mt-4">
                            {
                                socialsLinks.map(({src,alt,href}) => (
                                        <li key={alt}>
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="size-12 flex items-center justify-center bg-secondary-1000 rounded-full transition-colors ease-linear [&:hover,&:focus]:bg-secondary-400">
                                           <Image
                                            src={src}
                                            alt={alt}
                                            title={alt}
                                            className="w-5"
                                           /> 
                                        </a>
                                      </li>
                                ))
                            }
                         </ul>
                    </div>
                    </div>
                 </div>
                 <Form/>
             </ContainerGRID>
          </section>
    )
}
