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

        <CardLearning subtitle="Best Learning Platform" description="Start your journey toward a smarter future with expert-led courses, flexible learning, and powerful career support." btnText="Enroll Now">
            <span>Join</span> Thousands of <span>Learners </span>
        </CardLearning>
        </>
    )
}