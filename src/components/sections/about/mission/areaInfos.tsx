const listings = [
    "Deliver expert-led, real-world learning experiences",
    "Provide flexible, affordable access to skills that matter",
    "Support learners with tools, mentorship, and a vibrant community",
    "Continuously evolve with the latest industry trends"
]


export function AreaInfos(){
    return(
           <div className="w-full laptop:max-w-page-about space-y-12">
                        <div>
                               <h3 className="text-lg font-bold text-primary-650 mb-4 laptop:mb-6 laptop:text-3xl">Our Vision</h3>
                               <p className="text-gray-800 laptop:text-2xl">Our Vison To become a global learning hub that empowers individuals to thrive through accessible and forward-thinking education.</p>
                        </div>
                        <div>
                              <h3 className="text-lg font-bold text-primary-650 mb-4 laptop:mb-6 laptop:text-3xl">Our Mission</h3>
                              <ul className="space-y-6">
                                {
                                    listings.map((item) => (
                                         <li key={`item-${item}`} className=" laptop:text-xl text-gray-900 font-semibold pb-6 border-b border-gray-200">{item}</li>
                                    ))
                                }
                              </ul>
                        </div>
            </div>
    )
}