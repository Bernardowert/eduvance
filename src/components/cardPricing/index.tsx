import Image from "next/image";


import iconOkay from "@/assets/icons/check-okay.png";
import iconNotOkay from "@/assets/icons/not-okay.png";
import rocketIcon from "@/assets/icons/icon-rocket.png";
import { Button } from "../button";


interface CardPricingProps{
    title:string;
    description:string;
    price:string;
    listings:{
        descriptionIcon:string;
        notIncluded?:boolean;
    }[];
    btnHref?:string;
    btnText:string;
    bestPrice?:boolean;
}

export function CardPricing({title,description,price,listings,btnHref,btnText ,bestPrice}:CardPricingProps){
    return(
        <div className={`w-full max-w-card-course-home rounded-3xl border border-gray-50 p-8 bg-primary-50 space-y-8 ${bestPrice ? "border-2 bg-primary-700 text-white" : "text-gray-800"}`}>
              {
                  bestPrice && (
                       <div className="inline-flex rounded-full bg-primary-50 py-3 px-5 items-center gap-2.5">
                            <Image
                             src={rocketIcon}
                             alt="Icone de foguete"
                             title="foguete"
                            />
                            <span className="text-lg font-bold text-gray-900">Best Choice</span>
                       </div>
                  )
              }
              <div> 
                  <h3 className="font-bold text-3xl capitalize">{title}</h3>
                  <p className=" mt-4 text-lg">{description}</p>
              </div>
              <strong className="font-bold text-7xl flex items-end">${price}<small className="text-lg font-normal">/month</small></strong>
              <ul className="space-y-4">
                {
                    listings.map(({descriptionIcon, notIncluded}) => (
                      <li className="flex items-center gap-3" key={descriptionIcon}>
                        <div className={`w-8 h-8 flex items-center justify-center ${!notIncluded ? "bg-secondary-300" : "bg-gray-300"} rounded-full`}>
                            <Image
                             src={!notIncluded ? iconOkay : iconNotOkay}
                             alt={!notIncluded ? "Icone okay" : "Icone not okay"}
                             title={!notIncluded ? "Icone okay" : "Icone not okay"}                            
                            />
                        </div>
                        <span className={`"text-lg  font-medium" ${!notIncluded ? "" : "line-through"}`}>{descriptionIcon}</span>
                       </li>
                    ))
                }
              </ul>
              <Button btnStyle="btnSecondary" className={`w-full ${bestPrice ? "text-gray-900" : ""}`}>
                {btnText}
              </Button>
        </div>
    )
}