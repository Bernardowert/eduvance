import { ContainerGRID } from "@/components/containerGRID";


import logo01 from "@/assets/icons/logo-company-01.png";
import logo02 from "@/assets/icons/logo-company-02.png";
import logo03 from "@/assets/icons/logo-company-03.png";
import logo04 from "@/assets/icons/logo-company-04.png";
import logo05 from "@/assets/icons/logo-company-05.png";
import Image from "next/image";

const logos = [
    {
        srcImg: logo01,
        alt: "Logo company 01",
    },
    {
        srcImg: logo02,
        alt: "Logo company 02",
    },
    {
        srcImg: logo03,
        alt: "Logo company 03",
    },
    {
        srcImg: logo04,
        alt: "Logo company 04",
    },
    {
        srcImg: logo05,
        alt: "Logo company 05",
    }
]

export function SectionCompany(){
    return(
        <section className="pt-14 desktop:pt-36 desktop:pb-16">
            <ContainerGRID className="flex items-center desktop:justify-between flex-wrap justify-center gap-x-6 gap-y-8 desktop:gap-0">
                     {
                        logos.map(({srcImg, alt}) => (
                            <Image
                            key={alt}
                              src={srcImg}
                              alt={alt}
                              title={`imagem ${alt}`}
                              className="max-w-24 laptop:max-w-full"
                            />
                        ))
                     }
            </ContainerGRID>
        </section>
    )
}
