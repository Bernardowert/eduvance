import { CardSection } from "@/components/cardSection";
import { FormContact } from "@/components/sections/contact/formContact";

export default function Contact(){
    return(
        <>
          <CardSection description="Have questions, need support, or just want to say hello? We’re here to help.">
              <span>Get</span> in Touch with <span>Us</span>
          </CardSection>
          <FormContact/>
        </>
    )
}