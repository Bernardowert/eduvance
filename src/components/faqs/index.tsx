import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



interface FaqsProps{
    id:string;
    title:string;
    description:string;
    classNameAdd?:string;
}
export function Faqs({id,title,description, classNameAdd}:FaqsProps){
    return(
        <Accordion type="single" collapsible>
            <AccordionItem value={`item-${id}`} className={`border-b border-gray-200 pb-7 pt-4 ${classNameAdd}`}>
                <AccordionTrigger className="text-2xl font-semibold text-primary-500">{`Q: ${title}`}</AccordionTrigger>
                <AccordionContent className="text-gray-800 text-lg max-w-card-p mt-2">
                {`A: ${description}`}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}