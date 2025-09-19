import { SectionAbout } from "@/components/sections/home/about";
import { SectionBlog } from "@/components/sections/home/blog";
import { SectionCategories } from "@/components/sections/home/categories";
import { SectionCompany } from "@/components/sections/home/company";
import { SectionCourses } from "@/components/sections/home/courses";
import { SectionFaqs } from "@/components/sections/home/faqs";
import { SectionHero } from "@/components/sections/home/hero";
import { SectionJourney } from "@/components/sections/home/journey";
import { SectionLearning } from "@/components/sections/home/learning";
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

           <SectionLearning 
           subtitle="Best Learning Platform"
           description="Pick the course that suits your goals and join thousands of learners leveling up with Eduvance." 
           btnText="Browse All Courses">
           
            Ready to start <span>learning?</span>
           </SectionLearning>
        </>
  );
}
