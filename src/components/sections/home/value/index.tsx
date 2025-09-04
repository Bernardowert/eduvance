import Image from "next/image";

import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";

import imageValue from "@/assets/imageValue.png";
import { ListingCards } from "./listingCards";
export function SectionValue(){
    return(
        <section className="pb-28">
            <ContainerGRID className="flex justify-between">
                <Image
                 src={imageValue}
                 alt="Imagem de 2 pessoas segurando livros"
                 title="2 pessoas segurando livros"
                 className="w-full max-w-xl object-cover rounded-3xl"
                />
                <div className="w-full max-w-value-infos">
                    <HeadingTitle subtitle="Our Value">
                        <span>What</span> We <span>Stand</span> For
                    </HeadingTitle>
                     <ListingCards/>
                </div>
            </ContainerGRID>
        </section>
    )
}