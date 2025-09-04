import { SectionAbout } from "@/components/sections/home/about";
import { SectionCategories } from "@/components/sections/home/categories";
import { SectionCompany } from "@/components/sections/home/company";
import { SectionHero } from "@/components/sections/home/hero";

export default function Home() {
  return (
        <>
           <SectionHero/>
           <SectionCompany/>
           <SectionCategories/>
           <SectionAbout/>
        </>
  );
}
