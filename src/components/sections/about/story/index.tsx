import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import Image from "next/image";

import woman01 from "@/assets/images/about/image-woman-about.png";
import { StoryListing } from "./list";

export function SectionStoryAbout(){
    return(
        <section className="py-28">
            <ContainerGRID>
                        <div className="flex items-center justify-between">
                              <div className="w-full max-w-page-about">
                                <HeadingTitle subtitle="Our Story">
                                    gateway to <span>personal</span> and professional <span>growth</span>
                                </HeadingTitle>
                                <p className="text-2xl text-gray-800 mt-8">Eduvance was founded with one goal: to make high-quality education accessible to everyone, everywhere. We believe learning should be flexible, affordable, and deeply impactful—empowering individuals to pursue their goals and adapt in an ever-changing world.</p>
                              </div>
                              <Image
                               src={woman01}
                               alt="Imagem de uma mulher"
                               title="Imagem de uma mulher"
                               className="w-full max-w-page-about rounded-4xl h-image-about object-cover"
                              />
                        </div>
                        <StoryListing/>
            </ContainerGRID>
        </section>
    )
}