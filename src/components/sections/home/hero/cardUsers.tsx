import Image from "next/image";

import IconUsers from "@/assets/images/hero/Users.png";

export function CardUsers(){
    return(
        <div className="absolute bottom-[-13px] left-[-3px] laptop:right-[-40px] laptop:bottom-[-32px] w-full laptop:max-w-[260px] laptop:p-5 laptop:h-[168px] p-2.5 max-w-[185px] h-[104px] bg-white rounded-2xl shadow-2xl">
            <Image
             src={IconUsers}
             alt="Icone de usuarios"
             title="Usuarios"
             loading="eager"
             className="max-w-32 laptop:max-w-full"
            />
            <p className="text-gray-800 mt-4 text-xs">More than 50,000+ students
            enrolled around the world</p>
        </div>
    )
}