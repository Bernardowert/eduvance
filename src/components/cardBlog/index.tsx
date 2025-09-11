import Image, { StaticImageData } from "next/image";
import Link from "next/link";



interface CardBlogProps{
    src: StaticImageData | string;
    alt: string;
    titleImg: string;
    subtitle:string;
    title:string;
    description?:string;
    className?: string;
    date:string;
    isLarge?:boolean;
    path?:string;
}

export function CardBlog({src, alt, titleImg, title, subtitle, description, date, className, isLarge, path}: CardBlogProps){
    return(
        <Link href={`/blog/${path}`} className={`w-full group ${className ? className : ""}`}>
              <div className={`w-full overflow-hidden rounded-2xl ${isLarge ? "h-[444px]" : "h-52"}`}>
                    <Image
                    src={src}
                    alt={alt}
                    title={titleImg}
                    className="w-full h-full object-cover group-[&:hover,&:focus]:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
               <div className={`${isLarge ? "mt-6 space-y-4" : "mt-4 space-y-3"}`}>
                    <strong className={`${isLarge ? "text-xl font-semibold" : "text-lg font-bold"} text-primary-500 block`}>{subtitle}</strong>
                    <h3 className={`${isLarge ? "text-3xl font-bold" : "text-xl font-semibold"} text-gray-900`}>{title}</h3>
                     {
                        isLarge && (
                            <p className="text-2xl text-gray-800">{description}</p>
                        )
                     }
                    <span className={`${isLarge ? "text-xl" : "text-lg"} text-gray-700`}>{date}</span>
               </div>
        </Link>
    )
}

//  <div className="space-y-4 mt-6">
//                     <strong className="text-xl text-primary-500 block">{subtitle}</strong>
//                     <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
//                      {
//                         showDescription && (
//                             <p className="text-2xl text-gray-800">{description}</p>
//                         )
//                      }
//                     <span className="text-xl text-gray-700">{date}</span>
//                </div>