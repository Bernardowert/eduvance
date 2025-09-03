import { ReactNode } from "react"

interface ButtonProps {
    children:ReactNode;
    className?:string;
}

export function Button({children,className}:ButtonProps){
    return(
        <button className={`py-3 px-6 bg-secondary-300 rounded-full ${className}`}>
           {children}
        </button>
    )
}