const listings = [
     {
        title:"50k+",
        text:"Learners Worldwide"
     },
     {
        title:"120+",
        text:"Courses in Countries"
     },
     {
        title:"300+",
        text:"Industry-Relevant Courses"
     },
     {
        title:"98%",
        text:"Learner Satisfaction Rate"
     }
]


export function StoryListing(){
    return( 
         <ul className="grid grid-cols-2 tablet:grid-cols-4 justify-between mt-8 laptop:pt-16 laptop:border-t laptop:border-gray-200 laptop:mt-16 gap-y-8 laptop:gap-y-0">
            {
                listings.map(({title,text}) => (
                     <li key={title}>
                        <h3 className="text-gray-800 laptop:font-bold laptop:text-7xl text-5xl font-semibold uppercase mb-1 text-center">{title}</h3>
                        <span className="laptop:text-lg text-sm text-gray-700 block text-center">{text}</span>
                    </li>
                ))
            }
        </ul>
    )
}