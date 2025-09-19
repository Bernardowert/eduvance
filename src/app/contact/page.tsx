import { CardSection } from "@/components/cardSection";
import { SectionFaqContact } from "@/components/sections/contact/faqContact";
import { FormContact } from "@/components/sections/contact/formContact";
import { SectionLearning } from "@/components/sections/home/learning";

export default function Contact(){
    return(
        <>
          <CardSection description="Have questions, need support, or just want to say hello? We’re here to help.">
              <span>Get</span> in Touch with <span>Us</span>
          </CardSection>
          <FormContact/>
          <SectionFaqContact/>

          <SectionLearning subtitle="Best Learning Platform" description="We’re here to support your learning journey—feel free to reach out anytime." btnText="Contact Us Now">
             Still have <span>questions?</span>
          </SectionLearning>
        </>
    )
}