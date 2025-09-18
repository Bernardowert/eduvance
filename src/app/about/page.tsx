import { CardLearning } from "@/components/cardLearning";
import { CardSection } from "@/components/cardSection";
import { SectionInstructors } from "@/components/sections/about/instructors";
import { SectionMission } from "@/components/sections/about/mission";
import { SectionOurValue } from "@/components/sections/about/ourValue";
import { SectionStoryAbout } from "@/components/sections/about/story";
import { SectionStoryVideo } from "@/components/sections/about/storyVideo";

export default function About(){
    return(
        <>
          <CardSection description="Discover who we are, what we stand for, and how we’re shaping the future of learning.">
          <span>Learn</span> with Purpose Grow with <span>Eduvance</span>
        </CardSection> 
         <SectionStoryAbout/> 
         <SectionMission/>
         <SectionOurValue/>
         <SectionStoryVideo/>
         <SectionInstructors/>

        <CardLearning subtitle="Best Learning Platform" description="Join thousands of learners and take the first step toward your future today." btnText="Explore Course Now">
            <span>Join</span> Thousands of <span>Learners </span>
        </CardLearning>
        </>
    )
}