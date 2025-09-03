import Link from "next/link";


const listing = [
     {
        text:"Home",
        href:"/"
     },
     {
        text:"About",
        href: "/about"
     },
     {
        text:"Courses",
        href: "/courses"
     }
]

export function NavListing(){
    return(
        <nav className="hidden items-center gap-2 desktop:flex">
             {
                listing.map(({text,href}) => (
                    <Link href={href} key={text} className="px-6 py-2 font-medium text-gray-800 rounded-full transition-all ease-linear [&:hover,&:focus]:bg-primary-50 [&:hover,&:focus]:text-primary-700 [&:hover,&:focus]:font-bold">{text}</Link>
                ))
             }
        </nav>
    )
}