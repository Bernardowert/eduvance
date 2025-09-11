import { SectionAbout } from "@/components/sections/home/about";
import { SectionBlog } from "@/components/sections/home/blog";
import { SectionCategories } from "@/components/sections/home/categories";
import { SectionCompany } from "@/components/sections/home/company";
import { SectionCourses } from "@/components/sections/home/courses";
import { SectionFaqs } from "@/components/sections/home/faqs";
import { SectionHero } from "@/components/sections/home/hero";
import { SectionJourney } from "@/components/sections/home/journey";
import { SectionPricing } from "@/components/sections/home/pricing";
import { SectionStory } from "@/components/sections/home/story";
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
           <SectionJourney/>
           <SectionStory/>
           <SectionBlog/>
           <SectionFaqs/>
        </>
  );
}
