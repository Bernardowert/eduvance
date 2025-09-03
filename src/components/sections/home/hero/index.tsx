import { ContainerGRID } from "@/components/containerGRID";
import Image from "next/image";


import pinkIcon from "@/assets/icons/icon-star-pink.svg";
import { Button } from "@/components/button";
import { ListingCourses } from "./listingCourses";
import { SubTitle } from "@/components/subtitle";
import { AreaImage } from "./areaImage";

export function SectionHero(){
    return(
        <section className="laptop:pt-48 pt-28">
            <ContainerGRID className="flex items-center flex-col laptop:flex-row laptop:justify-between gap-8 laptop:gap-0">
                 <div className="w-full max-w-hero-areaText text-center laptop:text-start">
                     <SubTitle text="Best Learning Platform"/>
                     <h1 className="laptop:text-size-90 text-5xl font-bold text-gray-900 leading-tight laptop:my-6 my-4">

                        <span className="text-primary-700 mr-5 relative before:content-[''] before:bg-none before:absolute before:top-[9px] before:left-[-11px] before:w-[345px] before:h-[114px] laptop:before:bg-elevate before:bg-no-repeat before:bg-cover before:-z-10">Elevate</span>  
                        Your Future With 
                        
                        <Image 
                        src={pinkIcon}
                        alt="Icon star pink"
                        className="ml-8 align-middle hidden laptop:inline-block"
                        /> 

                        Practical 
                        
                        <span className="text-primary-700"> Skills</span>
                    </h1>

                    <p className="laptop:text-2xl text-gray-800">Flexible online courses designed to fit your schedule, goals, and passions empowering you to learn anytime.</p>
                    <Button className="laptop:my-10 mt-4 mb-8">Get Started Today</Button>
                    <ListingCourses/>
                 </div>
                 <AreaImage/>
            </ContainerGRID>
        </section>
    )
}