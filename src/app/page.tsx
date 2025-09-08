import { SectionAbout } from "@/components/sections/home/about";
import { SectionCategories } from "@/components/sections/home/categories";
import { SectionCompany } from "@/components/sections/home/company";
import { SectionCourses } from "@/components/sections/home/courses";
import { SectionHero } from "@/components/sections/home/hero";
import { SectionPricing } from "@/components/sections/home/pricing";
import { SectionValue } from "@/components/sections/home/value";

export default function Home() {
  return (
        <>
           <SectionHero/>
           <SectionCompany/>
           <SectionCategories/>
           <SectionAbout/>
           <SectionValue/>
           <SectionCourses/>
           <SectionPricing/>
        </>
  );
}
