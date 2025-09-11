import { Button } from "@/components/button";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import {  CardsBlogs } from "./cards";
export function SectionBlog(){
    return(
        <section className="pt-28">
            <ContainerGRID>
                  <div className="flex items-end justify-between">
                       <HeadingTitle subtitle="Blog" className="w-full max-w-footer-form">
                          <span>Insights</span> & Ideas from <span>Eduvance</span>
                       </HeadingTitle>
                       <div className="w-full max-w-hero-areaText">
                           <p className="text-2xl text-gray-800 mb-8">Stay inspired and informed with expert tips, industry trends, and practical advice for lifelong learners.</p>
                           <Button>
                             View More
                           </Button>
                       </div>
                  </div>
                  <CardsBlogs/>
            </ContainerGRID>
        </section>
    )
}