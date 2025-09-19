import { Id } from "@/utils/types/slug.type";

export default async function PageDetail({params}:Id){
    const {id} = await params;
   
    return(
        <h1>Detail Course - {id}</h1>
    )
}