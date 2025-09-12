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
         <ul className="flex items-center justify-between pt-16 border-t border-gray-200 mt-16">
            {
                listings.map(({title,text}) => (
                     <li key={title}>
                        <h3 className="text-gray-800 font-bold text-7xl uppercase mb-1 text-center">{title}</h3>
                        <span className="text-lg text-gray-700">{text}</span>
                    </li>
                ))
            }
        </ul>
    )
}