import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";



const styles = {
    btnPrimary:"bg-secondary-300 text-gray-900 [&:hover,&:focus]:bg-secondary-400",
    btnSecondary:"bg-white [&:hover,&:focus]:bg-secondary-100",
    btnThird:"bg-primary-700 text-white [&:hover,&:focus]:bg-primary-600"
}

type ButtonStyle = keyof typeof styles;


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
    btnStyle?: ButtonStyle;
}

export function Button({children,className, btnStyle = "btnPrimary"}:ButtonProps){
    const defaultClass = `py-3 px-6 font-bold transition-all ease-linear bg-secondary-300 rounded-full ${styles[btnStyle]}`;
    const combinedClass = twMerge(defaultClass, className);
    return(
        <button className={combinedClass}>
           {children}
        </button>
    )
}