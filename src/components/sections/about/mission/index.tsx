import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";

import iconFlower from "@/assets/icons/icon-flower.svg";
import greenDetail from "@/assets/icons/green-img-vision.svg";
import Image from "next/image";
import { AreaInfos } from "./areaInfos";

export function SectionMission(){
    return(
        <section className="pb-28">
            <ContainerGRID className="flex items-start justify-between flex-col gap-8 laptop:flex-row laptop:gap-0">
                <div className="w-full laptop:max-w-card-course-home">
                    <HeadingTitle subtitle="Vision & Mission" className="text-center laptop:text-start" classNameTitle="laptop:leading-16">
                        <span>Defining</span> Our Purpose <Image src={iconFlower} className="hidden laptop:inline-block align-middle ml-3" alt="Icone Flower" title="Flower" aria-hidden/> and <span>Direction</span>
                    </HeadingTitle>
                    <Image
                    src={greenDetail}
                    alt="Imagem detalhe verde"
                    title="detalhe verde"
                    className="laptop:mt-20 hidden laptop:block"
                    aria-hidden
                    />
                </div>
                <AreaInfos/>
            </ContainerGRID>
        </section>
    )
}