const listing = [
    {
        title:"120+",
        text:"Countries Reached"
    },
    {
        title:"600+",
        text:"Courses Available"
    }
]

export function ListingCourses(){
    return(
        <ul className="flex items-center desktop:gap-24 gap-14 justify-center desktop:justify-start">
             {
                listing.map(({title,text}) => (
                    <li key={text}>
                        <strong className="text-gray-900 desktop:text-6xl text-5xl block mb-1">{title}</strong>
                        <span className="desktop:text-lg text-sm text-gray-800">{text}</span>
                    </li>
                ))
             }
        </ul>
    )
}