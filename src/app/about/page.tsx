import { CardSection } from "@/components/cardSection";
import { SectionStoryAbout } from "@/components/sections/about/story";

export default function About(){
    return(
        <>
          <CardSection description="Discover who we are, what we stand for, and how we’re shaping the future of learning.">
          <span>Learn</span> with Purpose Grow with <span>Eduvance</span>
        </CardSection> 
         <SectionStoryAbout/> 
        </>
    )
}