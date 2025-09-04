import { SectionAbout } from "@/components/sections/home/about";
import { SectionCategories } from "@/components/sections/home/categories";
import { SectionCompany } from "@/components/sections/home/company";
import { SectionHero } from "@/components/sections/home/hero";
import { SectionValue } from "@/components/sections/home/value";

export default function Home() {
  return (
        <>
           <SectionHero/>
           <SectionCompany/>
           <SectionCategories/>
           <SectionAbout/>
           <SectionValue/>
        </>
  );
}
